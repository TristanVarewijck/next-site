import { useRouter } from "next/router";

const Service = () => {
  const router = useRouter();
  const { sid } = router.query;
  console.log(sid);
  return <div>service: {sid} </div>;
};

export default Service;
