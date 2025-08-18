import ClickCounter from "@/components/click-counter";
import axios from "axios";

// locahost:3000/profile > next server > layout.tsx + app/profile.page.tsx > Profile() > axios.get > profile.html

const fetchUserById = async (userId: number) => {
  const res = await axios.get(`https://dummyjson.com/users/${userId}`);
  return res.data;
};

export default async function Profile() {
  await new Promise((r) => setTimeout(r, 3000));
  const user = await fetchUserById(1);

  return (
    <div>
      <h1>
        Profile page for {user.firstName} {user.lastName}
      </h1>
      <ClickCounter initialCount={10} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        soluta iusto iure blanditiis ex sapiente aperiam alias sint, non ipsa
        nemo voluptatum ad itaque eligendi unde mollitia ea sed optio! Minus,
        velit, iusto saepe aspernatur, aut consectetur deleniti dolorum
        cupiditate repellendus illo error excepturi? Doloribus sint odit dolore
        ipsa quas.
      </p>
    </div>
  );
}
