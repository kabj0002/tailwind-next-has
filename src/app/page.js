export default function Home() {
  const cardsData = [
    {
      title: "Card Without An Image",
      text: "Lorem epic dolor stack amet epic adipisicing elit.",
    },
    {
      text: "This card doesn't even have a title! No image, no title. Just a bunch of text. Still, this card belongs here!",
    },
    {
      title: "Card with title and image",
      text: "Lorem epic dolor stack amet consectetur.",
      image: `https://images.unsplash.com/photo-1530714457710-6bf1899c1d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpYnJhbnQlMjBjb2xvcnN8ZW58MHwwfDB8fHww`,
    },
    {
      text: "This card has an image, but no title.",
      image: `https://images.unsplash.com/photo-1528811692195-d5037ac4b7cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx2aWJyYW50JTIwY29sb3JzfGVufDB8MHwwfHx8MA%3D%3D`,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-300">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-4 p-6">
        {cardsData.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </ul>
    </main>
  );
}

function Card(props) {
  return (
    <li className="group overflow-hidden rounded-xl bg-white p-4 shadow-md ring-1 ring-black/5 transition hover:-translate-y-px hover:shadow-lg has-[img]:p-0">
      {props.image && <img src={props.image} alt="" className="mb-4" />}
      <div className="grid gap-2 group-has-[img]:p-4">
        {props.title && (
          <h2 className="text-xl font-medium group-not-[:has(img)]:text-2xl">
            {props.title}
          </h2>
        )}
        <p className="group-not-[:has(h2,img]:text-2xl/[1.4] text-slate-700">
          {props.text}
        </p>
      </div>
    </li>
  );
}

/* Brug en kombination af not-[:has()] og has-[] til at løse opgaven nedenfor.
Style kortene forskelligt baseret på følgende betingelser:
Kort uden både et billede og en overskrift skal have en justeret font-størrelse og linjehøjde for paragraf tekst.
Kort uden billeder skal have en forøget font-størrelse for <h2>. not-[:has(h2,img)]:text-2xl 
Kort med billeder skal have være “full-bleed”, men deres indhold skal matche padding’en fra de øvrige kort.
*/
