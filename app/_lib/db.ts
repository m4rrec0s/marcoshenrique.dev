type MockDatabase = {
  close(): void;
  exec(_query: string): void;
  pragma(_query: string): void;
  prepare(_query: string): {
    all(): unknown[];
    get(): unknown;
    run(..._args: unknown[]): { lastInsertRowid: number };
  };
};

let database: MockDatabase | null = null;

function createMockDatabase(): MockDatabase {
  return {
    close() {},
    exec() {},
    pragma() {},
    prepare() {
      return {
        all() {
          return [];
        },
        get() {
          return null;
        },
        run() {
          return { lastInsertRowid: 0 };
        },
      };
    },
  };
}

export function initializeDatabase() {
  if (!database) {
    database = createMockDatabase();
  }

  return database;
}

export function getDatabase(): MockDatabase {
  return initializeDatabase();
}

export function closeDatabase() {
  if (database) {
    database.close();
    database = null;
  }
}
