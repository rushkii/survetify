-- SAMPLE DATA
INSERT INTO
    t_survey (name, description)
VALUES
    ('Test Survey', 'Deskripsi');

INSERT INTO
    t_survey_questions (survey_id, question)
VALUES
    (
        'insert UUID from t_survey.id',
        'Apakah kamu puas dalam aplikasi kami?'
    );

INSERT INTO
    t_survey_answers (question_id, answer)
VALUES
    (1, 'Sangat puas'),
    (1, 'Cukup puas'),
    (1, 'Biasa saja'),
    (1, 'Tidak puas'),
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
