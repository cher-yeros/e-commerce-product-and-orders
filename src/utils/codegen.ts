import * as fs from "fs";
import path from "path";

const file = path.join(__dirname, "../types/resolvers-types.ts");
const data = fs.readFileSync(file, "utf8");

const unwantedCode = `export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };`;

const pattern = /InputMaybe<(.+?)>/g;
const pattern2 = /Maybe<(.+?)>/g;

const transformedContent = data
  .replace(unwantedCode, "")
  .replace(pattern, "$1")
  .replace(pattern2, "$1");

fs.writeFileSync(file, transformedContent, "utf8");

console.log("done done");
