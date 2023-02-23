import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Dashboard;
