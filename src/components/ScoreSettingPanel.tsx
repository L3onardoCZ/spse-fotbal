import { Button } from "./ui/button";

export default function ScoreSettingPanel() {
  const time = new Date().toLocaleTimeString();
  return (
    <>
      <h1>
        Admin Panel
      </h1>
      <Button>
        +
      </Button>
      <Button>
        -
      </Button>
      <h2>
        {time}
      </h2>
      <Button>
        +
      </Button>
      <Button>
        -
      </Button>
    </>
  )
}