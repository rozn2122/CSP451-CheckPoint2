/**
 * Database module (starter stub).
 *
 * Feature branch: feature/database-connection should implement:
 * - connect()
 * - a config pattern using environment variables
 * - a simple query function OR a client getter
 *
 * You may use:
 * - a "fake" in-memory database for the checkpoint, OR
 * - SQLite, OR
 * - MongoDB/Postgres (optional) — keep setup simple
 */

function connect() {
  // Placeholder: simulate a successful connection
  return { connected: true, driver: "stub" };
}

module.exports = { connect };
export function connectDB() {
  console.log("Database connected");
}
export function connectDB() {
  const host = "localhost";
  const port = 5432;
  console.log(⁠ Database connected at ${host}:${port} ⁠);
}
