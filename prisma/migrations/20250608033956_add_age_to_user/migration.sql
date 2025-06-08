-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('unpaid', 'paid');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Owners" (
    "owner_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Owners_pkey" PRIMARY KEY ("owner_id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "city_id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "Sub_Cities" (
    "sub_city_id" SERIAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    "sub_city_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sub_Cities_pkey" PRIMARY KEY ("sub_city_id")
);

-- CreateTable
CREATE TABLE "Street_Addresses" (
    "street_address_id" SERIAL NOT NULL,
    "sub_city_id" INTEGER NOT NULL,
    "street_address" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Street_Addresses_pkey" PRIMARY KEY ("street_address_id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "location_id" SERIAL NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "street_address_id" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "Parking_Lots" (
    "lot_id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "lot_name" TEXT NOT NULL,
    "image" TEXT,
    "capacity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parking_Lots_pkey" PRIMARY KEY ("lot_id")
);

-- CreateTable
CREATE TABLE "Parking_Spaces" (
    "space_id" SERIAL NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "space_number" TEXT NOT NULL,
    "is_handicap" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parking_Spaces_pkey" PRIMARY KEY ("space_id")
);

-- CreateTable
CREATE TABLE "Availability_Logs" (
    "log_id" SERIAL NOT NULL,
    "space_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Availability_Logs_pkey" PRIMARY KEY ("log_id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "booking_id" SERIAL NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "space_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "status" "BookStatus" NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "payment_id" SERIAL NOT NULL,
    "booking_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payment_method" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "Prices" (
    "price_id" SERIAL NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "price_per_hour" DOUBLE PRECISION NOT NULL,
    "effective_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prices_pkey" PRIMARY KEY ("price_id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "review_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "notification_id" SERIAL NOT NULL,
    "owner_id" INTEGER,
    "message" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("notification_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Owners_email_key" ON "Owners"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cities_city_name_state_key" ON "Cities"("city_name", "state");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_Cities_city_id_sub_city_name_key" ON "Sub_Cities"("city_id", "sub_city_name");

-- CreateIndex
CREATE UNIQUE INDEX "Street_Addresses_sub_city_id_street_address_zip_code_key" ON "Street_Addresses"("sub_city_id", "street_address", "zip_code");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_booking_id_key" ON "Payments"("booking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Prices_lot_id_key" ON "Prices"("lot_id");

-- AddForeignKey
ALTER TABLE "Sub_Cities" ADD CONSTRAINT "Sub_Cities_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "Cities"("city_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street_Addresses" ADD CONSTRAINT "Street_Addresses_sub_city_id_fkey" FOREIGN KEY ("sub_city_id") REFERENCES "Sub_Cities"("sub_city_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Parking_Lots"("lot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_street_address_id_fkey" FOREIGN KEY ("street_address_id") REFERENCES "Street_Addresses"("street_address_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parking_Lots" ADD CONSTRAINT "Parking_Lots_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owners"("owner_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parking_Spaces" ADD CONSTRAINT "Parking_Spaces_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Parking_Lots"("lot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Availability_Logs" ADD CONSTRAINT "Availability_Logs_space_id_fkey" FOREIGN KEY ("space_id") REFERENCES "Parking_Spaces"("space_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_space_id_fkey" FOREIGN KEY ("space_id") REFERENCES "Parking_Spaces"("space_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Parking_Lots"("lot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Bookings"("booking_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prices" ADD CONSTRAINT "Prices_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Parking_Lots"("lot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Parking_Lots"("lot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owners"("owner_id") ON DELETE CASCADE ON UPDATE CASCADE;
