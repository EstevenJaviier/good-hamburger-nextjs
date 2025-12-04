"use client";

import Card from "@/src/components/card/card";
import Cart from "@/src/components/cart/cart";
import Filter from "@/src/components/filter/filter";
import SkeletonCard from "@/src/components/skeleton-card/skeleton-card";
import { Item } from "@/src/models/item.model";
import { getMenu } from "@/src/services/menu.service";
import { useEffect, useState } from "react";

export default function Menu({}) {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [filtered, setFiltered] = useState<Item[]>([]);

  const filter = (type: "all" | "sandwich" | "extra") => {
    setFiltered(
      type === "all" ? items : items.filter((item) => item.type === type)
    );
  };

  useEffect(() => {
    getMenu()
      .then((items) => {
        setFiltered(items);
        setItems(items);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setHasError(true);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="w-full max-w-3xl mx-auto">
            <Filter onChangeFilter={filter} />

            {hasError && (
              <div className="text-center py-10 text-gray-500 text-lg">
                Ha ocurrido un error al cargar el menú.
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filtered.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </>
  );
}
