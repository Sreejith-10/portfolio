import { Bento, BentoItem } from "@/components/ui/bento";

type PagePropsType<PT> = {
  params: Promise<PT>;
};

export default async function Page(props: PagePropsType<{ id: string }>) {
  const { id } = await props.params;
  return (
    <div>
      <Bento className="min-w-auto w-[320px] md:w-[800px] xl:w-[1200px] h-[1992px] md:h-[1192px] xl:h-[1200px] grid-cols-2 grid-rows-auto md:grid-cols-3 lg:grid-cols-4">
        <BentoItem>1</BentoItem>
        <BentoItem>2</BentoItem>
        <BentoItem>3</BentoItem>
        <BentoItem>4</BentoItem>
        <BentoItem>5</BentoItem>
        <BentoItem>6</BentoItem>
        <BentoItem>7</BentoItem>
      </Bento>
    </div>
  );
}
