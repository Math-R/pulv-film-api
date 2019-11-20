CREATE TABLE `series` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`seasons` int(255) NOT NULL,
	`release_date` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `movies` (
	`id` int(255) NOT NULL AUTO_INCREMENT UNIQUE,
	`name` varchar(255) NOT NULL UNIQUE,
	`description` TEXT NOT NULL,
	`release_date` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `genres` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `episodes` (
	`id` int NOT NULL AUTO_INCREMENT,
	`series_id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `series_genres` (
	`series_id` int NOT NULL,
	`genres_id` int NOT NULL
);

CREATE TABLE `movies_genres` (
	`movies_id` int NOT NULL,
	`genres_id` int NOT NULL
);

ALTER TABLE `episodes` ADD CONSTRAINT `episodes_fk0` FOREIGN KEY (`series_id`) REFERENCES `series`(`id`);

ALTER TABLE `series_genres` ADD CONSTRAINT `series_genres_fk0` FOREIGN KEY (`series_id`) REFERENCES `series`(`id`);

ALTER TABLE `series_genres` ADD CONSTRAINT `series_genres_fk1` FOREIGN KEY (`genres_id`) REFERENCES `genres`(`id`);

ALTER TABLE `movies_genres` ADD CONSTRAINT `movies_genres_fk0` FOREIGN KEY (`movies_id`) REFERENCES `movies`(`id`);

ALTER TABLE `movies_genres` ADD CONSTRAINT `movies_genres_fk1` FOREIGN KEY (`genres_id`) REFERENCES `genres`(`id`);

