import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });

  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState): TagState => ({
                ...currentState,
                tagSelected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState): TagState => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

/**
 * TypeScript doesn't care about excess props inside objects. What I need to do is force
 * object comparison by typing the return of the function as the type used.
 * So, I should always favor object comparison instead of function comparison.
*/
