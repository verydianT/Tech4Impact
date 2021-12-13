CREATE DATABASE skilvul_music_streaming

USE skilvul_music_streaming

CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE singers(
    singer_id AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

CREATE TABLE tracks(
    track_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_singers_singer_id_tracks
		FOREIGN KEY (singer_id)
		REFERENCES singers(singer_id),
	constraint fk_albums_album_id_tracks
		FOREIGN KEY(album_id)
		REFERENCES albums(album_id)
);

CREATE TABLE albums(
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_singers_singer_id_albums
        FOREIGN KEY (singer_id)
        REFERENCES singers(singer_id)
);

CREATE TABLE playlist(
    playlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    tracks INT NOT NULL,
    CONSTRAINT fk_users_user_id
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

CREATE TABLE track_playlist(
    playlist_id INT NOT NULL,
    track_id INT NOT NULL,
	CONSTRAINT fk_playlist_playlist_id
		FOREIGN KEY(playlist_id)
		REFERENCES playlist(playlist_id),
    CONSTRAINT fk_tracks_track_id
		FOREIGN KEY(track_id)
		REFERENCES tracks(track_id)
);