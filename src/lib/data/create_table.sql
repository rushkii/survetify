CREATE TABLE m_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    fullname VARCHAR
);

CREATE TABLE t_survey (
    id SERIAL PRIMARY KEY,
    uid varchar NOT NULL,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE t_survey_questions (
    id SERIAL PRIMARY KEY,
    survey_id INT NOT NULL,
    question TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT now (),
    CONSTRAINT fk_survey FOREIGN KEY (survey_id) REFERENCES t_survey (id) ON DELETE CASCADE
);

CREATE TABLE t_survey_answers (
    id SERIAL PRIMARY KEY,
    answer TEXT NOT NULL,
    question_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT now (),
    CONSTRAINT fk_question FOREIGN KEY (question_id) REFERENCES t_survey_questions (id) ON DELETE CASCADE
);

CREATE TABLE t_survey_user_answers (
    id SERIAL PRIMARY KEY,
    question_id INT NOT NULL,
    answer_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_question FOREIGN KEY (question_id) REFERENCES t_survey_questions (id) ON DELETE CASCADE,
    CONSTRAINT fk_answer FOREIGN KEY (answer_id) REFERENCES t_survey_answers (id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES m_users (id) ON DELETE CASCADE
)
