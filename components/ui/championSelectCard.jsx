/*

This is the champion select cards where users press on the card to redirect to the specific champion page

*/

"use client";

//  imports
//    npm packages
import Link from "next/link";
import Image from "next/image";

//  component
export default function ChampionSelectCard({
  id,
  name,
  iconPath,
  defaultLoadingScreenPath,
}) {
  /*
<a href={`/champions/${encodeURIComponent(id)}`}>
  */
  return (
    <Link
      href={`/champions/${name}`}
      key={`champ_${id}`}
      className="container relative h-80 max-w-40"
    >
      <div className="container relative h-80 max-w-40">
        <Image
          alt={`${name} loading screen`}
          src={defaultLoadingScreenPath}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-md max-h-80 max-w-40"
          onError={(event) => {
            event.target.id = "public/images/temp_openInventory.png";
            event.target.srcset = "public/images/temp_openInventory.png";
          }}
        />
        <div className="w-full max-w-40 max-h-16 p-2 absolute bottom-0 left-0 flex flex-row bg-blue-4 z-40 items-center justify-center rounded-b-md border-b">
          <Image
            alt={`${name} icon`}
            height={32}
            width={32}
            radius="sm"
            src={iconPath}
          />
          <div className="text-center ml-4">{name}</div>
        </div>
      </div>
    </Link>
  );
}

/*


*/
