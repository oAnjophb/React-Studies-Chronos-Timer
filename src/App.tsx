import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Ola mundo 1!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        assumenda exercitationem fugit qui quidem ea, enim nesciunt soluta nisi,
        necessitatibus aperiam perspiciatis unde consequatur consectetur
        molestiae! Delectus excepturi odio libero!
      </p>
    </>
  );
}
