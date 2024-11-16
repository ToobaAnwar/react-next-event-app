import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetup() {
  const router = useRouter();
  async function addMeetupHandler(meetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await response.json(); 
    router.push('/');
  }
  return (
    <Fragment>

<Head>
        <title>Create New React Meetups</title>
        <meta 
        name="description"
        content="Create your own meetups to boost Networking!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetup;
