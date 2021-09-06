import { Button } from "./Button";

interface SideBarProps {
  genres: any;
  handleClickButton: (value: any) => void;
  selectedGenreId: any;
}

export const SideBar = ({
  genres,
  handleClickButton,
  selectedGenreId,
}: SideBarProps) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
