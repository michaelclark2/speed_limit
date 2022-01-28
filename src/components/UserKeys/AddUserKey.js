import { useWallet } from "../../app/context/wallet";

const AddUserKey = () => {
  const { account, explorer } = useWallet();
  return (
    <div>
      <h3>Add API key for {explorer?.url}</h3>
    </div>
  );
};

export default AddUserKey;
