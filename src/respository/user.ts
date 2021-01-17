import client from "../database/db.ts";

export const search = async (id?: number | string | undefined) => {
  if (id) {
    return await client.execute("SELECT * FROM user WHERE id = ?", [id]);
  } else {
    return await client.execute("SELECT * FROM user");
  }
};

export interface InsertOrUpdateUserParams {
  id?: string;
  name: string;
  country: string;
}

export const insert = async ({ name, country }: InsertOrUpdateUserParams) => {
  return await client.execute(
    "INSERT INTO user (name, country) VALUES (?, ?)",
    [name, country],
  );
};

export const update = async (id: string | undefined, name: string, country: string) => {
  return await client.execute(
    "UPDATE user SET name = ?, country = ? WHERE id = ?",
    [name, country, id],
  );
};

export const remove = async (id: number | string | undefined) => {
  return await client.execute("DELETE FROM user WHERE id = ?", [id]);
};
