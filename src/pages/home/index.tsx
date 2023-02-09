import Button from "@/ui/Button";

const Home = () => {
  return (
    <div className="p-10 flex gap-12">
      <Button
        variant="primary"
        text="Button"
        onClick={() => console.log("hey")}
      />
      <Button variant="outline" text="Button" />
    </div>
  );
};

export default Home;
