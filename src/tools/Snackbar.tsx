import { enqueueSnackbar } from "notistack";

export function openSnackbar(
  message: string,
  variant: "default" | "error" | "success" | "warning" | "info",
  autoHideDuration: number = 7000
) {
  return enqueueSnackbar(message, {
    variant,
    autoHideDuration,
    anchorOrigin:{
        vertical: 'bottom',
        horizontal: 'right',
    }
  });
}