import UsersList from "./lists/UsersList";

const Users = () => {
  return (
    <div className="flex flex-col">
      <div className='text-center  rounded-2xl justify-round  shadow-blue-700 shadow-xl  font-bold text-4xl'>
        <h1 className='mb-9 text-white-700'>Property Listed Request</h1>
      </div>
      <UsersList />
      <div className="mt-6">
        <p className="font-poppins mt-6 font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 SecondaryDAO. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Users;
