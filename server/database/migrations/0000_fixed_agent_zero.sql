CREATE TABLE `message` (
	`id` text PRIMARY KEY NOT NULL,
	`text` text NOT NULL,
	`profile_id` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `profile` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL
);
