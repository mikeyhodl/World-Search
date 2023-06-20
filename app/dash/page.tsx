// import Image from "next/image";
import Link from "next/link";

export default function Dash() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/2989536.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90" />
      <div className="hero-content text-center text-neutral-content">
        <div>
        <article className="prose">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
        <Link href="/"><button className="btn btn-accent rounded-full btn-wide mt-8">Logout</button></Link>
        </div>
      </div>
    </div>
  );
}
