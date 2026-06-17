In it your code should:
    - Import mongoose.
    - Read the database address from an ENVIRONMENT VARIABLE
      (process.env.MONGO_URI) - do NOT hard-code the address.
    - Use mongoose to connect to that address.
    - Export the connection function so your app can call it
      (look up "mongoose.connect" and exporting a function).
    - Handle success and failure (log a clear message either way).
    