import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { addPost } from "../api/mutation/AddPost";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();
  const [updateTodo, { loading, error, data }] = useMutation(addPost);
  const onAddMeetup = (meetup) => {
    updateTodo({
      variables: {
        input: {
          title: meetup.title,
          body: meetup.description,
        },
      },
    });
  };

  useEffect(() => {
    if (data !== undefined) {
      history.replace("/meetup/");
    }
  }, [data, history]);

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} loading={loading} />
      {!loading && error && <p>Error while submitting...</p>}
    </section>
  );
};

export default NewMeetup;
