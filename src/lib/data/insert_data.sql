-- SAMPLE DATA
INSERT INTO
    t_survey (uid, name, description)
VALUES
    ('ktMvqPwXhO', 'Test Survey', 'Deskripsi');

INSERT INTO
    t_survey_questions (survey_id, question)
VALUES
    (1, 'Apakah kamu puas dalam aplikasi kami?');

INSERT INTO
    t_survey_answers (question_id, answer)
VALUES
    (1, 'Sangat tidak puas');

INSERT INTO
    m_users (username, fullname)
VALUES
    ('kiizuha', 'Kiizuha Kanazawa');

INSERT INTO
    t_survey_user_answers (question_id, answer_id, user_id)
VALUES
    (1, 1, 1),
    (1, 3, 1);
