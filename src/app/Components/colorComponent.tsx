"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
const Products = {
  pink: "pink",
  purple: "purple",
  yellow: "yellow",
} as const;
function ColorComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const deleteQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const val = searchParams.get(name);
      params.delete(name, val ?? undefined);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className=" flex gap-4 pt-4 ">
      <div className=" flex gap-1 flex-col ">
        <div className="flex items-center gap-2">
          <input
            min={1}
            checked={!!searchParams?.get(Products?.pink)}
            onClick={() => {
              const pink = searchParams.get(Products.pink);
              if (pink) {
                const deleted = deleteQueryString(Products.pink, "1");
                console.log({ pink, deleted, pathname });
                router.replace(
                  pathname + "?" + deleteQueryString(Products.pink, "1")
                );
                return;
              }
              router.push(
                pathname + "?" + createQueryString(Products.pink, "1")
              );
            }}
            type="checkbox"
            id="check"
            className=" accent-white w-4 h-5 top-0 left-0  "
          />
          <label>Pink</label>
        </div>
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber > 0) {
              router.push(
                pathname +
                  "?" +
                  createQueryString(Products.pink, e.target.value)
              );
            } else {
              router.push(
                pathname +
                  "?" +
                  deleteQueryString(Products.pink, e.target.value)
              );
            }
          }}
          type="number"
          value={searchParams?.get(Products?.pink) ?? ""}
          className="w-10 "
        />
      </div>
      {/*  */}
      <div className=" flex gap-1 flex-col ">
        <div className="flex items-center gap-2">
          <input
            min={1}
            checked={!!searchParams?.get(Products?.purple)}
            onClick={() => {
              const purple = searchParams.get(Products.purple);
              if (purple) {
                const deleted = deleteQueryString(Products.purple, "1");
                router.replace(
                  pathname + "?" + deleteQueryString(Products.purple, "1")
                );
                return;
              }
              router.push(
                pathname + "?" + createQueryString(Products.purple, "1")
              );
            }}
            type="checkbox"
            className=" accent-white w-4 h-5 top-0 left-0  "
          />
          <label>{Products?.purple}</label>
        </div>
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber > 0) {
              router.push(
                pathname +
                  "?" +
                  createQueryString(Products.purple, e.target.value)
              );
            } else {
              router.push(
                pathname +
                  "?" +
                  deleteQueryString(Products.purple, e.target.value)
              );
            }
          }}
          type="number"
          value={searchParams?.get(Products?.purple) ?? ""}
          className="w-10 "
        />
      </div>
      {/*  */}
      <div className=" flex gap-1 flex-col ">
        <div className="flex items-center gap-2">
          <input
            min={1}
            checked={!!searchParams?.get(Products?.yellow)}
            onClick={() => {
              const yellow = searchParams.get(Products.yellow);
              if (yellow) {
                deleteQueryString(Products.yellow, "1");

                router.replace(
                  pathname + "?" + deleteQueryString(Products.yellow, "1")
                );
                return;
              }
              router.push(
                pathname + "?" + createQueryString(Products.yellow, "1")
              );
            }}
            type="checkbox"
            id="check"
            className=" accent-white w-4 h-5 top-0 left-0  "
          />
          <label>{Products?.yellow}</label>
        </div>
        <input
          onChange={(e) => {
            if (e.target.valueAsNumber > 0) {
              router.push(
                pathname +
                  "?" +
                  createQueryString(Products.yellow, e.target.value)
              );
            } else {
              router.push(
                pathname +
                  "?" +
                  deleteQueryString(Products.yellow, e.target.value)
              );
            }
          }}
          type="number"
          value={searchParams?.get(Products?.yellow) ?? ""}
          className="w-10 "
        />
      </div>
    </div>
  );
}

export default ColorComponent;
