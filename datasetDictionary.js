const datasets = [{
        name: "Chess Game Dataset",
        id: "d-chess",
        pathname: "/Data4ALL/datasets/games.csv",
        download: "games.csv",
        classification: "beginner"
    },
    {
        name: "Indian Colleges Dataset",
        id: "d-college",
        pathname: "/Data4ALL/datasets/colleges.csv",
        download: "colleges.csv",
        classification: "beginner"
    },
    {
        name: "Iris Dataset",
        id: "d-iris",
        pathname: "/Data4ALL/datasets/Iris.csv",
        download: "iris.csv",
        classification: "beginner"
    },
    {
        name: "Mushroom Dataset",
        id: "d-mushroom",
        pathname: "/Data4ALL/datasets/MushroomDataset.zip",
        download: "MushroomDataset.zip",
        classification: "beginner"
    },
    {
        name: "Covid Vaccin(States wise) dataset",
        id: "d-vaccin",
        pathname: "/Data4ALL/datasets/covid_vaccine_statewise.csv",
        download: "covid_vaccine_statewise.csv",
        classification: "beginner"
    },
    {
        name: "Titanic Dataset",
        id: "d-titanic",
        pathname: "/Data4ALL/datasets/titanic.csv",
        download: "Titanic.csv",
        classification: "beginner"
    },
    {
        name: "Heart Failure Dataset",
        id: "d-heart-failure-prediction",
        pathname: "/Data4ALL/datasets/heart-failure-prediction.csv",
        download: "heart-failure-prediction.csv",
        classification: "beginner"
    },
    {
        name: "Weather History",
        id: "d-weather-history",
        pathname: "/Data4ALL/datasets/weatherHistory.xlsx",
        download: "weatherHistory.xlsx",
        classification: "inter"
    },
    {
        name: "Fashion Wear Dataset",
        id: "d-Fashion-wear",
        pathname: "/Data4ALL/datasets/fashion-mnist_train.csv",
        download: "fashion-mnist_train.csv",
        classification: "inter"
    },
    {
        name: "Indian Startup Funding",
        id: "d-startup-funding",
        pathname: "/Data4ALL/datasets/Startup_Fundings.xlsx",
        download: "Startup_Fundings.xlsx",
        classification: "inter"
    },
    {
        name: "Twitch Data",
        id: "d-Twitch Data",
        pathname: "/Data4ALL/datasets/twitchdata-update.csv",
        download: "twitchdata-update.csv",
        classification: "beginner"
    },
    {
        name: "Ads Click-through Rate",
        id: "d-Ads-Click-through-Rate",
        pathname: "/Data4ALL/datasets/Ads_CTR_Optimisation.csv",
        download: "Ads_CTR_Optimisation.csv",
        classification: "beginner"
    },
    {
        name: "Reddit Vaccine Myths",
        id: "d-Reddit-Vaccine-Myths",
        pathname: "/Data4ALL/datasets/reddit_vm.csv",
        download: "reddit_vm.csv",
        classification: "beginner"
    },
    {
        name: "Movies Dataset",
        id: "d-movies",
        pathname: "/Data4ALL/datasets/MoviesDataset.csv",
        download: "MoviesDataset.csv",
        classification: "beginner"
    },
    {
        name: "Colors Dataset",
        id: "d-colors",
        pathname: "/Data4ALL/datasets/colors.csv",
        download: "Colors.csv",
        classification: "beginner"
    },
    {
        name: "Parkinson Dataset",
        id: "Parkinson data",
        pathname: "/Data4ALL/datasets/PaHaW.zip",
        download: "PaHaW.zip",
        classification: "beginner"
    },
    {
        name: "Boston Housing Dataset",
        id: "d-housing",
        pathname: "/Data4ALL/datasets/housing.csv",
        download: "housing.csv",
        classification: "beginner"
    },
    {
        name: "Electric Car Dataset",
        id: "d-electricCar",
        pathname: "/Data4ALL/datasets/ElectricCarData.csv",
        download: "ElectricCarData.csv",
        classification: "beginner"
    },
    {
        name: "FDI in India",
        id: "d-fdi-india",
        pathname: "/Data4ALL/datasets/fdi-india.csv",
        download: "fdi-india.csv",
        classification: "beginner"
    },
    {
        name: "Heart Diseases",
        id: "d-heart-disease",
        pathname: "/Data4ALL/datasets/heart-disease.csv",
        download: "heart-disease.csv",
        classification: "beginner"
    },
    {
        name: "Customer Personality Analysis",
        id: "d-customer-personality",
        pathname: "/Data4ALL/datasets/customer_personality.csv",
        download: "customer_personality.csv",
        classification: "beginner"
    },
    {
        name: "Agriculture Datasets",
        id: "d-agriculture",
        pathname: "/Data4ALL/datasets/agriculture.csv",
        download: "agriculture.csv",
        classification: "beginner"
    },
    {
        name: "Ebola data",
        id: "d-ebola-data",
        pathname: "/Data4ALL/datasets/ebola_data_db_format.csv",
        download: "ebola_data.csv",
        classification: "inter"
    },
    {
        name: "New York City Airbnb Dataset",
        id: "d-nyc-airbnb",
        pathname: "/Data4ALL/datasets/nyc_airbnb.csv",
        download: "nyc_airbnb.csv",
        classification: "beginner"
    },
    {
        name: "Top-500 Companies-India Dataset",
        id: "d-company",
        pathname: "/Data4ALL/datasets/Top_500_Companies_India.csv",
        download: "Top_500_Companies_India.csv",
        classification: "beginner"
    },
    {
        name: "Covid-19 Dataset",
        id: "d-covid",
        pathname: "/Data4ALL/datasets/covid_19_data.csv",
        download: "covid_19_data.csv",
        classification: "beginner"
    },
    {
        name: "India Cities Dataset",
        id: "d-india_cities",
        pathname: "/Data4ALL/datasets/india_cities.csv",
        download: "india_cities.csv",
        classification: "beginner"
    },
    {
        name: "Novels Dataset",
        id: "d-novel",
        pathname: "/Data4ALL/datasets/books.csv",
        download: "novels_books.csv",
        classification: "beginner"
    },
    {
        name: "Indian Food Dataset",
        id: "d-food",
        pathname: "/Data4ALL/datasets/indian_food.csv",
        download: "indian_food.csv",
        classification: "beginner"
    },
    {
        name: "Olympics Dataset",
        id: "d-olympic",
        pathname: "/Data4ALL/datasets/olympics_data.csv",
        download: "olympics_data.csv",
        classification: "inter"
    },
    {
        name: "Indonesia Tourist Attraction 2020",
        id: "d-tourist",
        pathname: "/Data4ALL/datasets/tourist-attraction.csv",
        download: "tourist-attraction.csv",
        classification: "beginner"
    },
    {
        name: "Uber Stock Prices",
        id: "d-UBER",
        pathname: "/Data4ALL/datasets/UBER.csv",
        download: "UBER.csv",
        classification: "beginner"
    },
    {
        name: "Drinking Water Potability",
        id: "d-drinking-water-potability",
        pathname: "/Data4ALL/datasets/drinking_water_potability.csv",
        download: "drinking_water_potability.csv",
        classification: "inter"
    },
    {
        name: "Nutritional Facts",
        id: "d-nutritional-facts",
        pathname: "/Data4ALL/datasets/NutritionalFacts_Fruit_Vegetables_Seafood.csv",
        download: "NutritionalFacts_Fruit_Vegetables_Seafood.csv",
        classification: "beginner"
    },
    {
        name: "Health index",
        id: "d-health-index",
        pathname: "/Data4ALL/datasets/health-index-1.csv",
        download: "health-index-1.csv",
        classification: "inter"
    },
    {
        name: "Star Types Dataset",
        id: "StarsTypes_dataset",
        pathname: "/Data4ALL/datasets/StarsTypes_dataset.csv",
        download: "StarsTypes_dataset.csv",
        classification: "inter"
    },
    {
        name: "Flavours of chocolate.",
        id: "d-chocolates",
        pathname: "/Data4ALL/datasets/flavors_of_chocolate.csv",
        download: "flavors_of_chocolate.csv",
        classification: "beginner"
    },
    {
        name: "SpotifyTopTracks",
        id: "d-spotify",
        pathname: "/Data4ALL/datasets/spotifytoptracks.csv",
        download: "SpotifyTopTracks.csv",
        classification: "beginner"
    },
    {
        name: "Overall - NIRF Ranking 2020",
        id: "d-NIRF-2020-Overall",
        pathname: "/Data4ALL/datasets/Overall%20%20-%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Overall.csv",
        classification: "inter"
    },
    {
        name: "University - NIRF Ranking 2020",
        id: "d-NIRF-2020-University",
        pathname: "/Data4ALL/datasets/University%20%20-%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-University.csv",
        classification: "inter"
    },
    {
        name: "Engineering - NIRF Ranking 2020",
        id: "d-NIRF-2020-Engineering",
        pathname: "/Data4ALL/datasets/Engineering%20-%20NIRF-2020%20Ranking.csv",
        download: "NIRF-2020-Engineering.csv",
        classification: "inter"
    },
    {
        name: "Medical - NIRF Ranking 2020",
        id: "d-NIRF-2020-Medical",
        pathname: "/Data4ALL/datasets/medical%20-%20%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Medical.csv",
        classification: "inter"
    },
    {
        name: "Law - NIRF Ranking 2020",
        id: "d-NIRF-2020-Law",
        pathname: "/Data4ALL/datasets/law%20%20-%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Law.csv",
        classification: "inter"
    },
    {
        name: "Dental - NIRF Ranking 2020",
        id: "d-NIRF-2020-Dental",
        pathname: "/Data4ALL/datasets/Dental%20-%20%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Dental.csv",
        classification: "inter"
    },
    {
        name: "Architecture - NIRF Ranking 2020",
        id: "d-NIRF-2020-Architecture",
        pathname: "/Data4ALL/datasets/Architecture%20-%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Architecture.csv",
        classification: "inter"
    },
    {
        name: "Management - NIRF Ranking 2020",
        id: "d-NIRF-2020-Management",
        pathname: "/Data4ALL/datasets/management%20%20-%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Management.csv",
        classification: "inter"
    },
    {
        name: "Pharmacy - NIRF Ranking 2020",
        id: "d-NIRF-2020-Pharmacy",
        pathname: "/Data4ALL/datasets/Pharmacy%20-%20NIRF%20Ranking%202020.csv",
        download: "NIRF-2020-Pharmacy.csv",
        classification: "inter"
    },
    {
        name: "Monthly Gold Price From 1950",
        id: "d-gold",
        pathname: "/Data4ALL/datasets/monthly_gold_price.csv",
        download: "monthly_gold_price_1950.csv",
        classification: "beginner"
    },
    {
        name: "GitHub Repositories",
        id: "d-githubrep",
        pathname: "/Data4ALL/datasets/Github_repos.csv",
        download: "Github_repos.csv",
        classification: "beginner"
    },
    {
        name: "Extended Airports",
        id: "d-airports",
        pathname: "/Data4ALL/datasets/airports-extended.csv",
        download: "airports-extended.csv",
        classification: "beginner"
    },
    {
        name: "Movie Titles",
        id: "d-movietitle",
        pathname: "/Data4ALL/datasets/movie_titles.csv",
        download: "movie_titles.csv",
        classification: "beginner"
    },
    {
        name: "Generic Food",
        id: "d-generic-food",
        pathname: "/Data4ALL/datasets/generic-food.csv",
        download: "generic-food.csv",
        classification: "beginner"
    },
    {
        name: "Countries of the World",
        id: "d-countries",
        pathname: "/Data4ALL/datasets/countries%20of%20the%20world.csv",
        download: "countries of the world.csv",
        classification: "beginner"
    },
    {
        name: "Netflix shows",
        id: "d-netflix",
        pathname: "/Data4ALL/datasets/netflix.xlsx",
        download: "netflix.xlsx",
        classification: "beginner"
    },
    {
        name: "Alcohol Consumption",
        id: "d-alcohol",
        pathname: "/Data4ALL/datasets/alcohol_consumption.csv",
        download: "alcohol_consumption.csv",
        classification: "beginner"
    },
    {
        name: "Unicorn Startups in India till 2020",
        id: "d-Unicorn-Startups",
        pathname: "/Data4ALL/datasets/Unicorns%20Startups%20in%20India.csv",
        download: "Unicorns Startups in India.csv",
        classification: "inter"
    },
    {
        name: "Water Quality Data (India)",
        id: "d-water-quality",
        pathname: "/Data4ALL/datasets/water_dataX.csv",
        download: "water_dataX.csv",
        classification: "inter"
    },
    {
        name: "Lung Cancer Survey",
        id: "d-lung-cancer",
        pathname: "/Data4ALL/datasets/Lung_Cancer_Survey.csv",
        download: "Lung_Cancer_Survey.csv",
        classification: "inter"
    },
    {
        name: "Electricity Production By Source",
        id: "d-electricity-production",
        pathname: "/Data4ALL/datasets/Electricity_Production_By_Source.csv",
        download: "Electricity_Production_By_Source.csv",
        classification: "inter"
    },
    {
        name: "Farming Produce",
        id: "d-production",
        pathname: "/Data4ALL/datasets/produce.csv",
        download: "farming_produce.csv",
        classification: "beginner"
    },
    {
        name: "NBA Player Stats",
        id: "d-nba-player-stats",
        pathname: "/Data4ALL/datasets/NBA_Player_Stats.csv",
        download: "NBA_Player_Stats.csv",
        classification: "inter"
    },
    {
        name: "Melbourne Housing Data",
        id: "d-melbourne-housing-data",
        pathname: "/Data4ALL/datasets/Melbourne_housing_Data.csv",
        download: "Melbourne_housing_Data.csv",
        classification: "beginner"
    },
    {
        name: "Amazon India Product Listing",
        id: "d-product-listing",
        pathname: "/Data4ALL/datasets/Amazon_Product.csv",
        download: "Amazon_Product.csv",
        classification: "beginner"
    },
    {
        name: "Time series covid19",
        id: "d-time-series-covid19",
        pathname: "/Data4ALL/datasets/time_series_covid19.csv",
        download: "time_series_covid19.csv",
        classification: "beginner"
    },
    {
        name: "translations data",
        id: "d-translations",
        pathname: "/Data4ALL/datasets/translations.csv",
        download: "translations.csv",
        classification: "beginner"
    },
    {
        name: "Annual_surveys_data",
        id: "d-Annual_surveys_data",
        pathname: "/Data4ALL/datasets/Annual_surveys_data.csv",
        download: "Annual_surveys_data.csv",
        classification: "beginner"
    },
    {
        name: "Population by country 2020",
        id: "d-population_country",
        pathname: "/Data4ALL/datasets/population_by_country_2020.csv",
        download: "population_by_country_2020",
        classification: "beginner"
    },
    {
        name: "Hotel Properties Data",
        id: "d-hotels-citywide",
        pathname: "/Data4ALL/datasets/hotels-properties-citywide-1.csv",
        download: "hotels-citywide.csv",
        classification: "beginner"
    },
    {
        name: "Hospital General Information",
        id: "d-hospital-general",
        pathname: "/Data4ALL/datasets/Hospital_General_Information.csv",
        download: "hotels-citywide.csv",
        classification: "beginner"
    },
    {
        name: "Crops grown across the world Data",
        id: "d-crops",
        pathname: "/Data4ALL/datasets/crops.csv",
        download: "crops.csv",
        classification: "beginner"
    },
    {
        name: "Fortunate_1000_Companies_dataset",
        id: "d-fortune_1000",
        pathname: "/Data4ALL/datasets/Fortune_1000.csv",
        download: "Fortune_1000_Companies",
        classification: "beginner"
    }
];