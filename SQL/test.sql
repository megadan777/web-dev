USE music_database;
CREATE TABLE bands (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE albums (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    release_year INT,
    band_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (band_id) REFERENCES bands(id)
);


INSERT INTO bands (name)
VALUES ('Iron Maiden');

INSERT INTO bands (name)
VALUES ('Judas Priest'),  ('Megadeth'),  ('Stryper'),  ('Black Sabbath');

SELECT * FROM bands;

SELECT id AS 'ID', name AS 'Band Name'
FROM bands;

SELECT * FROM bands ORDER BY name;

DELETE FROM bands WHERE id IN (4, 6, 7, 9);

INSERT INTO albums (name, release_year, band_id)
VALUES 
    ('Seventh Son of a Seventh Son', 1988, 1),
    ('Powerslave', 1984, 1),
    ('To Hell With the Devil', 1986, 8),
    ('Soldiers Under Command', 1985, 8),
    ('Painkiller', 1990, 2),
    ('Sad Wings of Destiny', 1976, 2),
    ('Rust in Peace', 1990, 3),
    ('Dystopia', 2016, 3),
    ('Paranoid', 1970, 5),
    ('Master of Reality', 1971, 5);
        
SELECT * FROM albums;

SELECT DISTINCT name FROM albums;

-- UPDATE albums
-- SET release_year = 1982
-- WHERE id = ;

SELECT * FROM bands
JOIN albums ON bands.id = albums.band_id;

SELECT AVG(release_year) FROM albums;

SELECT * FROM albums
WHERE release_year BETWEEN 1970 AND 1988;

SELECT * FROM albums
WHERE name LIKE '%y%';

SELECT band_id, COUNT(band_id) FROM albums
GROUP BY band_id;

SELECT b.name AS band_name, COUNT(a.id) AS num_albums
FROM bands AS b
LEFT JOIN albums AS a ON b.id = a.band_id
GROUP BY b.id
HAVING num_albums = 2;


