import Link from "next/link";

export default function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link href="/Calculator">Calculadora de Prestamos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/Loans">Lista de Prestamos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/Request-Loan">Solicita un Prestamo</Link>
        </li>
      </ul>
    </div>
  );
}
