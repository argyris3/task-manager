import Board from "@/components/Board";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authOptions";
import LoginView from "@/components/views/LoginView";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Boards from "@/components/Boards";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <LoginView />;
  }
  return (
    <div>
      <h1 className="text-5xl mb-4"> Πινακες</h1>
      <Boards />

      <div className="mt-4">
        <Link className="btn primary gap-1 inline-flex" href={"/new-board"}>
          Δημιουργια Πινακα
          <FontAwesomeIcon className="h-6" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
