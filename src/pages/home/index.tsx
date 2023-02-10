import Button from "@/ui/Button";
import Text from "@/ui/Text";

const Home = () => {
  return (
    <div className="p-10 flex flex-col gap-12">
      <div className="p-10 flex gap-12">
        <Button
          variant="primary"
          text="Button"
          onClick={() => console.log("hey")}
        />
        <Button variant="outline" text="Button" />
      </div>
      <div>
        <Text variant="header">Header Examples</Text>
        <Text variant="title">Title Examples</Text>
        <Text variant="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tenetur beatae temporibus odit deserunt cumque nam voluptatum officia
          reiciendis dolores nobis non amet eum doloribus molestiae sit in, ipsa
          qui?
        </Text>
        <Text variant="link">Link Example</Text>
      </div>
    </div>
  );
};

export default Home;
