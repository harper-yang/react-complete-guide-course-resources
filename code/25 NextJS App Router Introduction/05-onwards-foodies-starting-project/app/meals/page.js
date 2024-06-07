import classes from "./page.module.css"
import Link from "next/link";
import MealsGrid from "@/components/meals/Meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

export const metadata = {
  title: 'All meals',
  description: 'All meals shared by our community',
};

async function LoadMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}

export default function MealsPage() {

  return (
      <>
        <header className={classes.header}>
          <h1>
            Delicious meals, created {""} <span className={classes.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself, It is easy and fun.
          </p>
        </header>
        <main className={classes.cta}>
          <Link href="/meals/share">
            Share your favorite recipe
          </Link>

          <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
            <LoadMeals/>
          </Suspense>
        </main>
      </>
  )
}
