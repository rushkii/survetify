CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE m_users (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR UNIQUE NOT NULL,
    fullname VARCHAR
);

CREATE TABLE t_survey (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE t_survey_questions (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    survey_id UUID NOT NULL,
    question TEXT NOT NULL,
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT now (),
        CONSTRAINT fk_survey FOREIGN KEY (survey_id) REFERENCES t_survey (id) ON DELETE CASCADE
);

CREATE TABLE t_survey_answers (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    answer TEXT NOT NULL,
    question_id BIGINT NOT NULL,
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT now (),
        CONSTRAINT fk_question FOREIGN KEY (question_id) REFERENCES t_survey_questions (id) ON DELETE CASCADE
);

CREATE TABLE t_survey_user_answers (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    question_id BIGINT NOT NULL,
    answer_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    CONSTRAINT fk_question FOREIGN KEY (question_id) REFERENCES t_survey_questions (id) ON DELETE CASCADE,
    CONSTRAINT fk_answer FOREIGN KEY (answer_id) REFERENCES t_survey_answers (id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES m_users (id) ON DELETE CASCADE
);
