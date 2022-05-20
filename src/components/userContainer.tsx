import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../redux/rootStore";
import { iUser } from "../redux/user/types";
import { onFetchUser } from "../redux/user/userAction";

const UserContainer = () => {
  const { data, loading, error } = useSelector((state: ApplicationState) => {
    return {
      data: state.user.data,
      loading: state.user.loading,
      error: state.user.error,
    };
  });
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(onFetchUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>UserContainer</div>
      <ul>
        {data?.map((user: iUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserContainer;
