import classes from "./page.module.css"
import {getMealDetail} from "@/lib/meals";
import Image from "next/image";
import {notFound} from "next/navigation";

export async function generateMetadata({params}) {
  const meal = getMealDetail(params.slug);
  if (!meal) {
    return notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default function MealDetailPage({params}) {
  const meal = getMealDetail(params.slug);
  if (!meal) {
    return notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />');

  return <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill/>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html: instructions
      }}/>
    </main>
  </>
}
