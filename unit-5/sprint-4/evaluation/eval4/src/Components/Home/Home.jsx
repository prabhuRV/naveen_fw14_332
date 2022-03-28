import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
export const Home = () => {
  const [meetdata, setMeetdata] = useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData = ()=> {
    axios.get("http://localhost:8080/meetups").then((res)=> {
      console.log(res.data)
      setMeetdata(res.data)
    })
  }
  return (
    <div className="homeContainer">
      {
        meetdata
        // .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`/meetup/el.id`} className="events" key={el.id}>
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
             <h2>{el.title}</h2>
             <h2>{el.location}</h2>
             <h2>{el.data}</h2>
             <h2>{el.time}</h2>
             <h2>{el.theme}</h2>
             <h2>{el.description}</h2>

            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
