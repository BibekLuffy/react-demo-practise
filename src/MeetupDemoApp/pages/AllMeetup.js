import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getPost } from "../api/query/GetPost";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetup = () => {
  const [dataMain, setDataMain] = useState([]);
  const {
    loading: load,
    error,
    data,
  } = useQuery(getPost, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 5,
        },
      },
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    if (data?.posts?.data?.length > 0) {
      let posts = [];
      data?.posts?.data?.forEach((post, index) => {
        posts.push({
          id: post.id,
          title: post.title,
          image:
            index % 2 === 0
              ? "https://image.shutterstock.com/image-photo/patan-ancient-city-kathmandu-valley-260nw-1137140381.jpg"
              : "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
          address: "City",
          description: "Meet up description",
        });
      });
      setDataMain(posts);
    }
  }, [data]);

  if (load || (!load && !error && dataMain.length <= 0))
    return <div>Fetching...</div>;

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={dataMain} />
    </section>
  );
};

export default AllMeetup;
