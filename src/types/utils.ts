export type Items = {
    title: string;
    id: string;
  };

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>> // <T> it is generic it is important for multiple
                                                                       // types in the field.we can change for our uses