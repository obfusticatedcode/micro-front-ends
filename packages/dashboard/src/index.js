// async import error handling. We can have a fallback incase the app fails completely; maybe to another version that works.
import("./bootstrap").catch((err) => console.log(err));
