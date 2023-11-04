import { Input } from "@nextui-org/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

// icons
import { IoMdSearch } from "react-icons/io";

export default function App() {
  const search = useRef();
  const router = useRouter()

  const handleSearch = (event) => {
    const keyword = search.current.value

    if (!keyword) return

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/user/${keyword}`)
    }
  }

  return (
    <div className="flex gap-2">
      <Input
        ref={search}
        radius="lg"
        onKeyDown={handleSearch}
        classNames={{
          label: "text-black/50 dark:text-white",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-500 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-md",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        endContent={
          <IoMdSearch className="text-xl "/>
        }
        placeholder="Search..."
      />
      <div className="flex items-center">
        {/* <Button
          onClick={handleSearch}
          size="sm"
        >
          Search
        </Button> */}
      </div>
    </div>
  );
}
