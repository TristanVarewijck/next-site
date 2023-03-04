import { useRouter } from "next/router";

const Service = () => {
  const router = useRouter();
  const { sid } = router.query;
  return <div>service: {sid} </div>;
};

export default Service;
