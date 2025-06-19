import { useAppSelector } from "../store/hooks";
const User = () => {
  const userNameEmail = useAppSelector((state) => state.nameEmail);
  const userAddress = useAppSelector((state) => state.address);
  return (
    <div>
      <div>Name: {userNameEmail.name}</div>
      <div>Email: {userNameEmail.email}</div>
      <div>Street: {userAddress.street}</div>
      <div>City: {userAddress.city}</div>
    </div>
  );
};

export default User;
