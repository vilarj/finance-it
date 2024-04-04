import { FOOTER_URL } from "@/Constants/Contants";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <p>Copyright © 2024</p>
        <Link href={FOOTER_URL} target="_blank">
          AOE
        </Link>
      </div>
    </div>
  );
}
