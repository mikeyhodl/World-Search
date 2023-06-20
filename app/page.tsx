import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://wallpaperaccess.com/full/2989536.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-y-1.5">
          <h1 className="mb-5 text-3xl font-bold">Login</h1>
          <input type="text" placeholder="Username" className="input input-bordered input-success w-full max-w-xs rounded-full text-center	" />
          <br />
          <input type="text" placeholder="Password" className="input input-bordered input-success w-full max-w-xs rounded-full text-center	" />
          <div className="space-y-4">
          <Link href="/dash"><button className="btn btn-accent rounded-full btn-wide">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
