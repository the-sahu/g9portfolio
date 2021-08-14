import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import blogs from "./data/blogs-data.js";
import certificates from "./data/certificates-data.js";
import collaborators from "./data/collaborators-data.js";
import events from "./data/events-data.js";
import hero from "./data/hero-data.js";
import news from "./data/news-data.js";
import partners from "./data/partners-data.js";
import stats from "./data/stats-data.js";
import superstarDonars from "./data/superstar-donor-data.js";
import team from "./data/team-data.js";
import User from "./models/userModel.js";
import Article from "./models/articleModel.js";
import Certificates from "./models/certificatesModel.js";
import Collaborator from "./models/collaboratorModel.js";
import Events from "./models/eventsModel.js";
import Hero from "./models/heroModel.js";
import News from "./models/newsModel.js";
import Partner from "./models/partnerModel.js";
import Stats from "./models/statsModel.js";
import SuperstarDonar from "./models/superstarDonarModel.js";
import Team from "./models/teamModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Article.deleteMany();
    await Certificates.deleteMany();
    await Collaborator.deleteMany();
    await Events.deleteMany();
    await Hero.deleteMany();
    await News.deleteMany();
    await Partner.deleteMany();
    await Stats.deleteMany();
    await SuperstarDonar.deleteMany();
    await Team.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleArticles = blogs.map((blog) => {
      return { ...blog };
    });
    const sampleCertificates = certificates.map((certificates) => {
      return { ...certificates };
    });
    const sampleCollaborators = collaborators.map((collaborators) => {
      return { ...collaborators };
    });
    const sampleEvents = events.map((events) => {
      return { ...events };
    });
    const sampleHero = hero.map((hero) => {
      return { ...hero };
    });
    const sampleNews = news.map((news) => {
      return { ...news };
    });
    const samplePartners = partners.map((partners) => {
      return { ...partners };
    });
    const sampleStats = stats.map((stats) => {
      return { ...stats };
    });
    const sampleSuperstarDonars = superstarDonars.map((superstarDonars) => {
      return { ...superstarDonars };
    });
    const sampleTeam = team.map((team) => {
      return { ...team };
    });

    await Article.insertMany(sampleArticles);
    await Certificates.insertMany(sampleCertificates);
    await Collaborator.insertMany(sampleCollaborators);
    await Events.insertMany(sampleEvents);
    await Hero.insertMany(sampleHero);
    await News.insertMany(sampleNews);
    await Partner.insertMany(samplePartners);
    await Stats.insertMany(sampleStats);
    await SuperstarDonar.insertMany(sampleSuperstarDonars);
    await Team.insertMany(sampleSuperstarDonars);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Article.deleteMany();
    await Certificates.deleteMany();
    await Collaborator.deleteMany();
    await Events.deleteMany();
    await Hero.deleteMany();
    await News.deleteMany();
    await Partner.deleteMany();
    await Stats.deleteMany();
    await SuperstarDonar.deleteMany();
    await Team.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
