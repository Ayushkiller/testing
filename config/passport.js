const passport = require("passport");
const LocalStrategy = require("passport-local");

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//configure passport
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // Use email instead of username
    async (email, password, done) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: "Invalid email or password" });
        }

        // Validate the password (assuming you have a method on the User model)
        const isMatch = await user.validatePassword(password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid email or password" });
        }

        // If everything is fine, return the user
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
