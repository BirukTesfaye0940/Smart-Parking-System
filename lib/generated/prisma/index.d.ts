
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model SubCity
 * 
 */
export type SubCity = $Result.DefaultSelection<Prisma.$SubCityPayload>
/**
 * Model StreetAddress
 * 
 */
export type StreetAddress = $Result.DefaultSelection<Prisma.$StreetAddressPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model ParkingLot
 * 
 */
export type ParkingLot = $Result.DefaultSelection<Prisma.$ParkingLotPayload>
/**
 * Model ParkingSpace
 * 
 */
export type ParkingSpace = $Result.DefaultSelection<Prisma.$ParkingSpacePayload>
/**
 * Model AvailabilityLog
 * 
 */
export type AvailabilityLog = $Result.DefaultSelection<Prisma.$AvailabilityLogPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus]


export const SpaceStatus: {
  available: 'available',
  unavailable: 'unavailable'
};

export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus]


export const BookStatus: {
  unpaid: 'unpaid',
  paid: 'paid'
};

export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus]

}

export type AdminStatus = $Enums.AdminStatus

export const AdminStatus: typeof $Enums.AdminStatus

export type SpaceStatus = $Enums.SpaceStatus

export const SpaceStatus: typeof $Enums.SpaceStatus

export type BookStatus = $Enums.BookStatus

export const BookStatus: typeof $Enums.BookStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCity`: Exposes CRUD operations for the **SubCity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCities
    * const subCities = await prisma.subCity.findMany()
    * ```
    */
  get subCity(): Prisma.SubCityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streetAddress`: Exposes CRUD operations for the **StreetAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreetAddresses
    * const streetAddresses = await prisma.streetAddress.findMany()
    * ```
    */
  get streetAddress(): Prisma.StreetAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingLot`: Exposes CRUD operations for the **ParkingLot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLots
    * const parkingLots = await prisma.parkingLot.findMany()
    * ```
    */
  get parkingLot(): Prisma.ParkingLotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSpace`: Exposes CRUD operations for the **ParkingSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSpaces
    * const parkingSpaces = await prisma.parkingSpace.findMany()
    * ```
    */
  get parkingSpace(): Prisma.ParkingSpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilityLog`: Exposes CRUD operations for the **AvailabilityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityLogs
    * const availabilityLogs = await prisma.availabilityLog.findMany()
    * ```
    */
  get availabilityLog(): Prisma.AvailabilityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    User: 'User',
    Owner: 'Owner',
    City: 'City',
    SubCity: 'SubCity',
    StreetAddress: 'StreetAddress',
    Location: 'Location',
    ParkingLot: 'ParkingLot',
    ParkingSpace: 'ParkingSpace',
    AvailabilityLog: 'AvailabilityLog',
    Booking: 'Booking',
    Payment: 'Payment',
    Price: 'Price',
    Review: 'Review',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "user" | "owner" | "city" | "subCity" | "streetAddress" | "location" | "parkingLot" | "parkingSpace" | "availabilityLog" | "booking" | "payment" | "price" | "review" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      SubCity: {
        payload: Prisma.$SubCityPayload<ExtArgs>
        fields: Prisma.SubCityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>
          }
          findFirst: {
            args: Prisma.SubCityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>
          }
          findMany: {
            args: Prisma.SubCityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>[]
          }
          create: {
            args: Prisma.SubCityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>
          }
          createMany: {
            args: Prisma.SubCityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>[]
          }
          delete: {
            args: Prisma.SubCityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>
          }
          update: {
            args: Prisma.SubCityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>
          }
          deleteMany: {
            args: Prisma.SubCityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>[]
          }
          upsert: {
            args: Prisma.SubCityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCityPayload>
          }
          aggregate: {
            args: Prisma.SubCityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCity>
          }
          groupBy: {
            args: Prisma.SubCityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCityCountArgs<ExtArgs>
            result: $Utils.Optional<SubCityCountAggregateOutputType> | number
          }
        }
      }
      StreetAddress: {
        payload: Prisma.$StreetAddressPayload<ExtArgs>
        fields: Prisma.StreetAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreetAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreetAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>
          }
          findFirst: {
            args: Prisma.StreetAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreetAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>
          }
          findMany: {
            args: Prisma.StreetAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>[]
          }
          create: {
            args: Prisma.StreetAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>
          }
          createMany: {
            args: Prisma.StreetAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreetAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>[]
          }
          delete: {
            args: Prisma.StreetAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>
          }
          update: {
            args: Prisma.StreetAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>
          }
          deleteMany: {
            args: Prisma.StreetAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreetAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreetAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>[]
          }
          upsert: {
            args: Prisma.StreetAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetAddressPayload>
          }
          aggregate: {
            args: Prisma.StreetAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreetAddress>
          }
          groupBy: {
            args: Prisma.StreetAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreetAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreetAddressCountArgs<ExtArgs>
            result: $Utils.Optional<StreetAddressCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      ParkingLot: {
        payload: Prisma.$ParkingLotPayload<ExtArgs>
        fields: Prisma.ParkingLotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findFirst: {
            args: Prisma.ParkingLotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findMany: {
            args: Prisma.ParkingLotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          create: {
            args: Prisma.ParkingLotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          createMany: {
            args: Prisma.ParkingLotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          delete: {
            args: Prisma.ParkingLotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          update: {
            args: Prisma.ParkingLotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingLotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingLotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          aggregate: {
            args: Prisma.ParkingLotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLot>
          }
          groupBy: {
            args: Prisma.ParkingLotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotCountAggregateOutputType> | number
          }
        }
      }
      ParkingSpace: {
        payload: Prisma.$ParkingSpacePayload<ExtArgs>
        fields: Prisma.ParkingSpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          findFirst: {
            args: Prisma.ParkingSpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          findMany: {
            args: Prisma.ParkingSpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>[]
          }
          create: {
            args: Prisma.ParkingSpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          createMany: {
            args: Prisma.ParkingSpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>[]
          }
          delete: {
            args: Prisma.ParkingSpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          update: {
            args: Prisma.ParkingSpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          deleteMany: {
            args: Prisma.ParkingSpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>[]
          }
          upsert: {
            args: Prisma.ParkingSpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          aggregate: {
            args: Prisma.ParkingSpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSpace>
          }
          groupBy: {
            args: Prisma.ParkingSpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSpaceCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpaceCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityLog: {
        payload: Prisma.$AvailabilityLogPayload<ExtArgs>
        fields: Prisma.AvailabilityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>
          }
          findMany: {
            args: Prisma.AvailabilityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>[]
          }
          create: {
            args: Prisma.AvailabilityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>
          }
          createMany: {
            args: Prisma.AvailabilityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>
          }
          update: {
            args: Prisma.AvailabilityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityLogPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityLog>
          }
          groupBy: {
            args: Prisma.AvailabilityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityLogCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityLogCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    user?: UserOmit
    owner?: OwnerOmit
    city?: CityOmit
    subCity?: SubCityOmit
    streetAddress?: StreetAddressOmit
    location?: LocationOmit
    parkingLot?: ParkingLotOmit
    parkingSpace?: ParkingSpaceOmit
    availabilityLog?: AvailabilityLogOmit
    booking?: BookingOmit
    payment?: PaymentOmit
    price?: PriceOmit
    review?: ReviewOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    payments: number
    reviews: number
    notification: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    parkingLots: number
    notifications: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLots?: boolean | OwnerCountOutputTypeCountParkingLotsArgs
    notifications?: boolean | OwnerCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountParkingLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    subCities: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCities?: boolean | CityCountOutputTypeCountSubCitiesArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountSubCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCityWhereInput
  }


  /**
   * Count Type SubCityCountOutputType
   */

  export type SubCityCountOutputType = {
    addresses: number
  }

  export type SubCityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | SubCityCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * SubCityCountOutputType without action
   */
  export type SubCityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCityCountOutputType
     */
    select?: SubCityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCityCountOutputType without action
   */
  export type SubCityCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetAddressWhereInput
  }


  /**
   * Count Type StreetAddressCountOutputType
   */

  export type StreetAddressCountOutputType = {
    locations: number
  }

  export type StreetAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | StreetAddressCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * StreetAddressCountOutputType without action
   */
  export type StreetAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddressCountOutputType
     */
    select?: StreetAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreetAddressCountOutputType without action
   */
  export type StreetAddressCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type ParkingLotCountOutputType
   */

  export type ParkingLotCountOutputType = {
    spaces: number
    locations: number
    prices: number
    reviews: number
    booking: number
  }

  export type ParkingLotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaces?: boolean | ParkingLotCountOutputTypeCountSpacesArgs
    locations?: boolean | ParkingLotCountOutputTypeCountLocationsArgs
    prices?: boolean | ParkingLotCountOutputTypeCountPricesArgs
    reviews?: boolean | ParkingLotCountOutputTypeCountReviewsArgs
    booking?: boolean | ParkingLotCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotCountOutputType
     */
    select?: ParkingLotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpaceWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ParkingSpaceCountOutputType
   */

  export type ParkingSpaceCountOutputType = {
    availability: number
    bookings: number
  }

  export type ParkingSpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | ParkingSpaceCountOutputTypeCountAvailabilityArgs
    bookings?: boolean | ParkingSpaceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSpaceCountOutputType without action
   */
  export type ParkingSpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpaceCountOutputType
     */
    select?: ParkingSpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSpaceCountOutputType without action
   */
  export type ParkingSpaceCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityLogWhereInput
  }

  /**
   * ParkingSpaceCountOutputType without action
   */
  export type ParkingSpaceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payment: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | BookingCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    OTP: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    OTP: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    OTP: number | null
    isVerified: boolean | null
    status: $Enums.AdminStatus | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    OTP: number | null
    isVerified: boolean | null
    status: $Enums.AdminStatus | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone: number
    OTP: number
    isVerified: number
    status: number
    createdAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    OTP?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    OTP?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified: boolean
    status: $Enums.AdminStatus
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password" | "phone" | "OTP" | "isVerified" | "status" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone: string
      OTP: number
      isVerified: boolean
      status: $Enums.AdminStatus
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly first_name: FieldRef<"Admin", 'String'>
    readonly last_name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly phone: FieldRef<"Admin", 'String'>
    readonly OTP: FieldRef<"Admin", 'Int'>
    readonly isVerified: FieldRef<"Admin", 'Boolean'>
    readonly status: FieldRef<"Admin", 'AdminStatus'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    OTP: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    OTP: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    OTP: number | null
    isVerified: boolean | null
    status: $Enums.AdminStatus | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    OTP: number | null
    isVerified: boolean | null
    status: $Enums.AdminStatus | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone: number
    OTP: number
    isVerified: number
    status: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    OTP?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    OTP?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified: boolean
    status: $Enums.AdminStatus
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    notification?: boolean | User$notificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "first_name" | "last_name" | "email" | "password" | "phone" | "OTP" | "isVerified" | "status" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    notification?: boolean | User$notificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone: string
      OTP: number
      isVerified: boolean
      status: $Enums.AdminStatus
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends User$notificationArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly OTP: FieldRef<"User", 'Int'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'AdminStatus'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.notification
   */
  export type User$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    owner_id: number | null
    OTP: number | null
  }

  export type OwnerSumAggregateOutputType = {
    owner_id: number | null
    OTP: number | null
  }

  export type OwnerMinAggregateOutputType = {
    owner_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    OTP: number | null
    isVerified: boolean | null
    status: $Enums.AdminStatus | null
    created_at: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    owner_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    OTP: number | null
    isVerified: boolean | null
    status: $Enums.AdminStatus | null
    created_at: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    owner_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone: number
    OTP: number
    isVerified: number
    status: number
    created_at: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    owner_id?: true
    OTP?: true
  }

  export type OwnerSumAggregateInputType = {
    owner_id?: true
    OTP?: true
  }

  export type OwnerMinAggregateInputType = {
    owner_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    created_at?: true
  }

  export type OwnerMaxAggregateInputType = {
    owner_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    created_at?: true
  }

  export type OwnerCountAggregateInputType = {
    owner_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    OTP?: true
    isVerified?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    owner_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified: boolean
    status: $Enums.AdminStatus
    created_at: Date
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    owner_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
    parkingLots?: boolean | Owner$parkingLotsArgs<ExtArgs>
    notifications?: boolean | Owner$notificationsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    owner_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    owner_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    owner_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OTP?: boolean
    isVerified?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"owner_id" | "first_name" | "last_name" | "email" | "password" | "phone" | "OTP" | "isVerified" | "status" | "created_at", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLots?: boolean | Owner$parkingLotsArgs<ExtArgs>
    notifications?: boolean | Owner$notificationsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      parkingLots: Prisma.$ParkingLotPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      owner_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone: string
      OTP: number
      isVerified: boolean
      status: $Enums.AdminStatus
      created_at: Date
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `owner_id`
     * const ownerWithOwner_idOnly = await prisma.owner.findMany({ select: { owner_id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `owner_id`
     * const ownerWithOwner_idOnly = await prisma.owner.createManyAndReturn({
     *   select: { owner_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `owner_id`
     * const ownerWithOwner_idOnly = await prisma.owner.updateManyAndReturn({
     *   select: { owner_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLots<T extends Owner$parkingLotsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$parkingLotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Owner$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly owner_id: FieldRef<"Owner", 'Int'>
    readonly first_name: FieldRef<"Owner", 'String'>
    readonly last_name: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly password: FieldRef<"Owner", 'String'>
    readonly phone: FieldRef<"Owner", 'String'>
    readonly OTP: FieldRef<"Owner", 'Int'>
    readonly isVerified: FieldRef<"Owner", 'Boolean'>
    readonly status: FieldRef<"Owner", 'AdminStatus'>
    readonly created_at: FieldRef<"Owner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.parkingLots
   */
  export type Owner$parkingLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    where?: ParkingLotWhereInput
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    cursor?: ParkingLotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * Owner.notifications
   */
  export type Owner$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    city_id: number | null
  }

  export type CitySumAggregateOutputType = {
    city_id: number | null
  }

  export type CityMinAggregateOutputType = {
    city_id: number | null
    city_name: string | null
    state: string | null
    created_at: Date | null
  }

  export type CityMaxAggregateOutputType = {
    city_id: number | null
    city_name: string | null
    state: string | null
    created_at: Date | null
  }

  export type CityCountAggregateOutputType = {
    city_id: number
    city_name: number
    state: number
    created_at: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    city_id?: true
  }

  export type CitySumAggregateInputType = {
    city_id?: true
  }

  export type CityMinAggregateInputType = {
    city_id?: true
    city_name?: true
    state?: true
    created_at?: true
  }

  export type CityMaxAggregateInputType = {
    city_id?: true
    city_name?: true
    state?: true
    created_at?: true
  }

  export type CityCountAggregateInputType = {
    city_id?: true
    city_name?: true
    state?: true
    created_at?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    city_id: number
    city_name: string
    state: string
    created_at: Date
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    city_id?: boolean
    city_name?: boolean
    state?: boolean
    created_at?: boolean
    subCities?: boolean | City$subCitiesArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    city_id?: boolean
    city_name?: boolean
    state?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    city_id?: boolean
    city_name?: boolean
    state?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    city_id?: boolean
    city_name?: boolean
    state?: boolean
    created_at?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"city_id" | "city_name" | "state" | "created_at", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCities?: boolean | City$subCitiesArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      subCities: Prisma.$SubCityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      city_id: number
      city_name: string
      state: string
      created_at: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `city_id`
     * const cityWithCity_idOnly = await prisma.city.findMany({ select: { city_id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `city_id`
     * const cityWithCity_idOnly = await prisma.city.createManyAndReturn({
     *   select: { city_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `city_id`
     * const cityWithCity_idOnly = await prisma.city.updateManyAndReturn({
     *   select: { city_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCities<T extends City$subCitiesArgs<ExtArgs> = {}>(args?: Subset<T, City$subCitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly city_id: FieldRef<"City", 'Int'>
    readonly city_name: FieldRef<"City", 'String'>
    readonly state: FieldRef<"City", 'String'>
    readonly created_at: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.subCities
   */
  export type City$subCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    where?: SubCityWhereInput
    orderBy?: SubCityOrderByWithRelationInput | SubCityOrderByWithRelationInput[]
    cursor?: SubCityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCityScalarFieldEnum | SubCityScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model SubCity
   */

  export type AggregateSubCity = {
    _count: SubCityCountAggregateOutputType | null
    _avg: SubCityAvgAggregateOutputType | null
    _sum: SubCitySumAggregateOutputType | null
    _min: SubCityMinAggregateOutputType | null
    _max: SubCityMaxAggregateOutputType | null
  }

  export type SubCityAvgAggregateOutputType = {
    sub_city_id: number | null
    city_id: number | null
  }

  export type SubCitySumAggregateOutputType = {
    sub_city_id: number | null
    city_id: number | null
  }

  export type SubCityMinAggregateOutputType = {
    sub_city_id: number | null
    city_id: number | null
    sub_city_name: string | null
    created_at: Date | null
  }

  export type SubCityMaxAggregateOutputType = {
    sub_city_id: number | null
    city_id: number | null
    sub_city_name: string | null
    created_at: Date | null
  }

  export type SubCityCountAggregateOutputType = {
    sub_city_id: number
    city_id: number
    sub_city_name: number
    created_at: number
    _all: number
  }


  export type SubCityAvgAggregateInputType = {
    sub_city_id?: true
    city_id?: true
  }

  export type SubCitySumAggregateInputType = {
    sub_city_id?: true
    city_id?: true
  }

  export type SubCityMinAggregateInputType = {
    sub_city_id?: true
    city_id?: true
    sub_city_name?: true
    created_at?: true
  }

  export type SubCityMaxAggregateInputType = {
    sub_city_id?: true
    city_id?: true
    sub_city_name?: true
    created_at?: true
  }

  export type SubCityCountAggregateInputType = {
    sub_city_id?: true
    city_id?: true
    sub_city_name?: true
    created_at?: true
    _all?: true
  }

  export type SubCityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCity to aggregate.
     */
    where?: SubCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCities to fetch.
     */
    orderBy?: SubCityOrderByWithRelationInput | SubCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCities
    **/
    _count?: true | SubCityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCityMaxAggregateInputType
  }

  export type GetSubCityAggregateType<T extends SubCityAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCity[P]>
      : GetScalarType<T[P], AggregateSubCity[P]>
  }




  export type SubCityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCityWhereInput
    orderBy?: SubCityOrderByWithAggregationInput | SubCityOrderByWithAggregationInput[]
    by: SubCityScalarFieldEnum[] | SubCityScalarFieldEnum
    having?: SubCityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCityCountAggregateInputType | true
    _avg?: SubCityAvgAggregateInputType
    _sum?: SubCitySumAggregateInputType
    _min?: SubCityMinAggregateInputType
    _max?: SubCityMaxAggregateInputType
  }

  export type SubCityGroupByOutputType = {
    sub_city_id: number
    city_id: number
    sub_city_name: string
    created_at: Date
    _count: SubCityCountAggregateOutputType | null
    _avg: SubCityAvgAggregateOutputType | null
    _sum: SubCitySumAggregateOutputType | null
    _min: SubCityMinAggregateOutputType | null
    _max: SubCityMaxAggregateOutputType | null
  }

  type GetSubCityGroupByPayload<T extends SubCityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCityGroupByOutputType[P]>
            : GetScalarType<T[P], SubCityGroupByOutputType[P]>
        }
      >
    >


  export type SubCitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_city_id?: boolean
    city_id?: boolean
    sub_city_name?: boolean
    created_at?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    addresses?: boolean | SubCity$addressesArgs<ExtArgs>
    _count?: boolean | SubCityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCity"]>

  export type SubCitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_city_id?: boolean
    city_id?: boolean
    sub_city_name?: boolean
    created_at?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCity"]>

  export type SubCitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_city_id?: boolean
    city_id?: boolean
    sub_city_name?: boolean
    created_at?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCity"]>

  export type SubCitySelectScalar = {
    sub_city_id?: boolean
    city_id?: boolean
    sub_city_name?: boolean
    created_at?: boolean
  }

  export type SubCityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_city_id" | "city_id" | "sub_city_name" | "created_at", ExtArgs["result"]["subCity"]>
  export type SubCityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    addresses?: boolean | SubCity$addressesArgs<ExtArgs>
    _count?: boolean | SubCityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type SubCityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $SubCityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCity"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      addresses: Prisma.$StreetAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_city_id: number
      city_id: number
      sub_city_name: string
      created_at: Date
    }, ExtArgs["result"]["subCity"]>
    composites: {}
  }

  type SubCityGetPayload<S extends boolean | null | undefined | SubCityDefaultArgs> = $Result.GetResult<Prisma.$SubCityPayload, S>

  type SubCityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCityCountAggregateInputType | true
    }

  export interface SubCityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCity'], meta: { name: 'SubCity' } }
    /**
     * Find zero or one SubCity that matches the filter.
     * @param {SubCityFindUniqueArgs} args - Arguments to find a SubCity
     * @example
     * // Get one SubCity
     * const subCity = await prisma.subCity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCityFindUniqueArgs>(args: SelectSubset<T, SubCityFindUniqueArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCityFindUniqueOrThrowArgs} args - Arguments to find a SubCity
     * @example
     * // Get one SubCity
     * const subCity = await prisma.subCity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCityFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityFindFirstArgs} args - Arguments to find a SubCity
     * @example
     * // Get one SubCity
     * const subCity = await prisma.subCity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCityFindFirstArgs>(args?: SelectSubset<T, SubCityFindFirstArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityFindFirstOrThrowArgs} args - Arguments to find a SubCity
     * @example
     * // Get one SubCity
     * const subCity = await prisma.subCity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCityFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCities
     * const subCities = await prisma.subCity.findMany()
     * 
     * // Get first 10 SubCities
     * const subCities = await prisma.subCity.findMany({ take: 10 })
     * 
     * // Only select the `sub_city_id`
     * const subCityWithSub_city_idOnly = await prisma.subCity.findMany({ select: { sub_city_id: true } })
     * 
     */
    findMany<T extends SubCityFindManyArgs>(args?: SelectSubset<T, SubCityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCity.
     * @param {SubCityCreateArgs} args - Arguments to create a SubCity.
     * @example
     * // Create one SubCity
     * const SubCity = await prisma.subCity.create({
     *   data: {
     *     // ... data to create a SubCity
     *   }
     * })
     * 
     */
    create<T extends SubCityCreateArgs>(args: SelectSubset<T, SubCityCreateArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCities.
     * @param {SubCityCreateManyArgs} args - Arguments to create many SubCities.
     * @example
     * // Create many SubCities
     * const subCity = await prisma.subCity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCityCreateManyArgs>(args?: SelectSubset<T, SubCityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCities and returns the data saved in the database.
     * @param {SubCityCreateManyAndReturnArgs} args - Arguments to create many SubCities.
     * @example
     * // Create many SubCities
     * const subCity = await prisma.subCity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCities and only return the `sub_city_id`
     * const subCityWithSub_city_idOnly = await prisma.subCity.createManyAndReturn({
     *   select: { sub_city_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCityCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCity.
     * @param {SubCityDeleteArgs} args - Arguments to delete one SubCity.
     * @example
     * // Delete one SubCity
     * const SubCity = await prisma.subCity.delete({
     *   where: {
     *     // ... filter to delete one SubCity
     *   }
     * })
     * 
     */
    delete<T extends SubCityDeleteArgs>(args: SelectSubset<T, SubCityDeleteArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCity.
     * @param {SubCityUpdateArgs} args - Arguments to update one SubCity.
     * @example
     * // Update one SubCity
     * const subCity = await prisma.subCity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCityUpdateArgs>(args: SelectSubset<T, SubCityUpdateArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCities.
     * @param {SubCityDeleteManyArgs} args - Arguments to filter SubCities to delete.
     * @example
     * // Delete a few SubCities
     * const { count } = await prisma.subCity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCityDeleteManyArgs>(args?: SelectSubset<T, SubCityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCities
     * const subCity = await prisma.subCity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCityUpdateManyArgs>(args: SelectSubset<T, SubCityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCities and returns the data updated in the database.
     * @param {SubCityUpdateManyAndReturnArgs} args - Arguments to update many SubCities.
     * @example
     * // Update many SubCities
     * const subCity = await prisma.subCity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCities and only return the `sub_city_id`
     * const subCityWithSub_city_idOnly = await prisma.subCity.updateManyAndReturn({
     *   select: { sub_city_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubCityUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCity.
     * @param {SubCityUpsertArgs} args - Arguments to update or create a SubCity.
     * @example
     * // Update or create a SubCity
     * const subCity = await prisma.subCity.upsert({
     *   create: {
     *     // ... data to create a SubCity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCity we want to update
     *   }
     * })
     */
    upsert<T extends SubCityUpsertArgs>(args: SelectSubset<T, SubCityUpsertArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityCountArgs} args - Arguments to filter SubCities to count.
     * @example
     * // Count the number of SubCities
     * const count = await prisma.subCity.count({
     *   where: {
     *     // ... the filter for the SubCities we want to count
     *   }
     * })
    **/
    count<T extends SubCityCountArgs>(
      args?: Subset<T, SubCityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCityAggregateArgs>(args: Subset<T, SubCityAggregateArgs>): Prisma.PrismaPromise<GetSubCityAggregateType<T>>

    /**
     * Group by SubCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCityGroupByArgs['orderBy'] }
        : { orderBy?: SubCityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCity model
   */
  readonly fields: SubCityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addresses<T extends SubCity$addressesArgs<ExtArgs> = {}>(args?: Subset<T, SubCity$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCity model
   */
  interface SubCityFieldRefs {
    readonly sub_city_id: FieldRef<"SubCity", 'Int'>
    readonly city_id: FieldRef<"SubCity", 'Int'>
    readonly sub_city_name: FieldRef<"SubCity", 'String'>
    readonly created_at: FieldRef<"SubCity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCity findUnique
   */
  export type SubCityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * Filter, which SubCity to fetch.
     */
    where: SubCityWhereUniqueInput
  }

  /**
   * SubCity findUniqueOrThrow
   */
  export type SubCityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * Filter, which SubCity to fetch.
     */
    where: SubCityWhereUniqueInput
  }

  /**
   * SubCity findFirst
   */
  export type SubCityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * Filter, which SubCity to fetch.
     */
    where?: SubCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCities to fetch.
     */
    orderBy?: SubCityOrderByWithRelationInput | SubCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCities.
     */
    cursor?: SubCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCities.
     */
    distinct?: SubCityScalarFieldEnum | SubCityScalarFieldEnum[]
  }

  /**
   * SubCity findFirstOrThrow
   */
  export type SubCityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * Filter, which SubCity to fetch.
     */
    where?: SubCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCities to fetch.
     */
    orderBy?: SubCityOrderByWithRelationInput | SubCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCities.
     */
    cursor?: SubCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCities.
     */
    distinct?: SubCityScalarFieldEnum | SubCityScalarFieldEnum[]
  }

  /**
   * SubCity findMany
   */
  export type SubCityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * Filter, which SubCities to fetch.
     */
    where?: SubCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCities to fetch.
     */
    orderBy?: SubCityOrderByWithRelationInput | SubCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCities.
     */
    cursor?: SubCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCities.
     */
    skip?: number
    distinct?: SubCityScalarFieldEnum | SubCityScalarFieldEnum[]
  }

  /**
   * SubCity create
   */
  export type SubCityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCity.
     */
    data: XOR<SubCityCreateInput, SubCityUncheckedCreateInput>
  }

  /**
   * SubCity createMany
   */
  export type SubCityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCities.
     */
    data: SubCityCreateManyInput | SubCityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCity createManyAndReturn
   */
  export type SubCityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * The data used to create many SubCities.
     */
    data: SubCityCreateManyInput | SubCityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCity update
   */
  export type SubCityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCity.
     */
    data: XOR<SubCityUpdateInput, SubCityUncheckedUpdateInput>
    /**
     * Choose, which SubCity to update.
     */
    where: SubCityWhereUniqueInput
  }

  /**
   * SubCity updateMany
   */
  export type SubCityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCities.
     */
    data: XOR<SubCityUpdateManyMutationInput, SubCityUncheckedUpdateManyInput>
    /**
     * Filter which SubCities to update
     */
    where?: SubCityWhereInput
    /**
     * Limit how many SubCities to update.
     */
    limit?: number
  }

  /**
   * SubCity updateManyAndReturn
   */
  export type SubCityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * The data used to update SubCities.
     */
    data: XOR<SubCityUpdateManyMutationInput, SubCityUncheckedUpdateManyInput>
    /**
     * Filter which SubCities to update
     */
    where?: SubCityWhereInput
    /**
     * Limit how many SubCities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCity upsert
   */
  export type SubCityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCity to update in case it exists.
     */
    where: SubCityWhereUniqueInput
    /**
     * In case the SubCity found by the `where` argument doesn't exist, create a new SubCity with this data.
     */
    create: XOR<SubCityCreateInput, SubCityUncheckedCreateInput>
    /**
     * In case the SubCity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCityUpdateInput, SubCityUncheckedUpdateInput>
  }

  /**
   * SubCity delete
   */
  export type SubCityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
    /**
     * Filter which SubCity to delete.
     */
    where: SubCityWhereUniqueInput
  }

  /**
   * SubCity deleteMany
   */
  export type SubCityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCities to delete
     */
    where?: SubCityWhereInput
    /**
     * Limit how many SubCities to delete.
     */
    limit?: number
  }

  /**
   * SubCity.addresses
   */
  export type SubCity$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    where?: StreetAddressWhereInput
    orderBy?: StreetAddressOrderByWithRelationInput | StreetAddressOrderByWithRelationInput[]
    cursor?: StreetAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreetAddressScalarFieldEnum | StreetAddressScalarFieldEnum[]
  }

  /**
   * SubCity without action
   */
  export type SubCityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCity
     */
    select?: SubCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCity
     */
    omit?: SubCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCityInclude<ExtArgs> | null
  }


  /**
   * Model StreetAddress
   */

  export type AggregateStreetAddress = {
    _count: StreetAddressCountAggregateOutputType | null
    _avg: StreetAddressAvgAggregateOutputType | null
    _sum: StreetAddressSumAggregateOutputType | null
    _min: StreetAddressMinAggregateOutputType | null
    _max: StreetAddressMaxAggregateOutputType | null
  }

  export type StreetAddressAvgAggregateOutputType = {
    street_address_id: number | null
    sub_city_id: number | null
  }

  export type StreetAddressSumAggregateOutputType = {
    street_address_id: number | null
    sub_city_id: number | null
  }

  export type StreetAddressMinAggregateOutputType = {
    street_address_id: number | null
    sub_city_id: number | null
    street_address: string | null
    zip_code: string | null
    created_at: Date | null
  }

  export type StreetAddressMaxAggregateOutputType = {
    street_address_id: number | null
    sub_city_id: number | null
    street_address: string | null
    zip_code: string | null
    created_at: Date | null
  }

  export type StreetAddressCountAggregateOutputType = {
    street_address_id: number
    sub_city_id: number
    street_address: number
    zip_code: number
    created_at: number
    _all: number
  }


  export type StreetAddressAvgAggregateInputType = {
    street_address_id?: true
    sub_city_id?: true
  }

  export type StreetAddressSumAggregateInputType = {
    street_address_id?: true
    sub_city_id?: true
  }

  export type StreetAddressMinAggregateInputType = {
    street_address_id?: true
    sub_city_id?: true
    street_address?: true
    zip_code?: true
    created_at?: true
  }

  export type StreetAddressMaxAggregateInputType = {
    street_address_id?: true
    sub_city_id?: true
    street_address?: true
    zip_code?: true
    created_at?: true
  }

  export type StreetAddressCountAggregateInputType = {
    street_address_id?: true
    sub_city_id?: true
    street_address?: true
    zip_code?: true
    created_at?: true
    _all?: true
  }

  export type StreetAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreetAddress to aggregate.
     */
    where?: StreetAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetAddresses to fetch.
     */
    orderBy?: StreetAddressOrderByWithRelationInput | StreetAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreetAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreetAddresses
    **/
    _count?: true | StreetAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreetAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreetAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreetAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreetAddressMaxAggregateInputType
  }

  export type GetStreetAddressAggregateType<T extends StreetAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateStreetAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreetAddress[P]>
      : GetScalarType<T[P], AggregateStreetAddress[P]>
  }




  export type StreetAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetAddressWhereInput
    orderBy?: StreetAddressOrderByWithAggregationInput | StreetAddressOrderByWithAggregationInput[]
    by: StreetAddressScalarFieldEnum[] | StreetAddressScalarFieldEnum
    having?: StreetAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreetAddressCountAggregateInputType | true
    _avg?: StreetAddressAvgAggregateInputType
    _sum?: StreetAddressSumAggregateInputType
    _min?: StreetAddressMinAggregateInputType
    _max?: StreetAddressMaxAggregateInputType
  }

  export type StreetAddressGroupByOutputType = {
    street_address_id: number
    sub_city_id: number
    street_address: string
    zip_code: string
    created_at: Date
    _count: StreetAddressCountAggregateOutputType | null
    _avg: StreetAddressAvgAggregateOutputType | null
    _sum: StreetAddressSumAggregateOutputType | null
    _min: StreetAddressMinAggregateOutputType | null
    _max: StreetAddressMaxAggregateOutputType | null
  }

  type GetStreetAddressGroupByPayload<T extends StreetAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreetAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreetAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreetAddressGroupByOutputType[P]>
            : GetScalarType<T[P], StreetAddressGroupByOutputType[P]>
        }
      >
    >


  export type StreetAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    street_address_id?: boolean
    sub_city_id?: boolean
    street_address?: boolean
    zip_code?: boolean
    created_at?: boolean
    subCity?: boolean | SubCityDefaultArgs<ExtArgs>
    locations?: boolean | StreetAddress$locationsArgs<ExtArgs>
    _count?: boolean | StreetAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetAddress"]>

  export type StreetAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    street_address_id?: boolean
    sub_city_id?: boolean
    street_address?: boolean
    zip_code?: boolean
    created_at?: boolean
    subCity?: boolean | SubCityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetAddress"]>

  export type StreetAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    street_address_id?: boolean
    sub_city_id?: boolean
    street_address?: boolean
    zip_code?: boolean
    created_at?: boolean
    subCity?: boolean | SubCityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetAddress"]>

  export type StreetAddressSelectScalar = {
    street_address_id?: boolean
    sub_city_id?: boolean
    street_address?: boolean
    zip_code?: boolean
    created_at?: boolean
  }

  export type StreetAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"street_address_id" | "sub_city_id" | "street_address" | "zip_code" | "created_at", ExtArgs["result"]["streetAddress"]>
  export type StreetAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCity?: boolean | SubCityDefaultArgs<ExtArgs>
    locations?: boolean | StreetAddress$locationsArgs<ExtArgs>
    _count?: boolean | StreetAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreetAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCity?: boolean | SubCityDefaultArgs<ExtArgs>
  }
  export type StreetAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCity?: boolean | SubCityDefaultArgs<ExtArgs>
  }

  export type $StreetAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreetAddress"
    objects: {
      subCity: Prisma.$SubCityPayload<ExtArgs>
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      street_address_id: number
      sub_city_id: number
      street_address: string
      zip_code: string
      created_at: Date
    }, ExtArgs["result"]["streetAddress"]>
    composites: {}
  }

  type StreetAddressGetPayload<S extends boolean | null | undefined | StreetAddressDefaultArgs> = $Result.GetResult<Prisma.$StreetAddressPayload, S>

  type StreetAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreetAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreetAddressCountAggregateInputType | true
    }

  export interface StreetAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreetAddress'], meta: { name: 'StreetAddress' } }
    /**
     * Find zero or one StreetAddress that matches the filter.
     * @param {StreetAddressFindUniqueArgs} args - Arguments to find a StreetAddress
     * @example
     * // Get one StreetAddress
     * const streetAddress = await prisma.streetAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreetAddressFindUniqueArgs>(args: SelectSubset<T, StreetAddressFindUniqueArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreetAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreetAddressFindUniqueOrThrowArgs} args - Arguments to find a StreetAddress
     * @example
     * // Get one StreetAddress
     * const streetAddress = await prisma.streetAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreetAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, StreetAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreetAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressFindFirstArgs} args - Arguments to find a StreetAddress
     * @example
     * // Get one StreetAddress
     * const streetAddress = await prisma.streetAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreetAddressFindFirstArgs>(args?: SelectSubset<T, StreetAddressFindFirstArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreetAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressFindFirstOrThrowArgs} args - Arguments to find a StreetAddress
     * @example
     * // Get one StreetAddress
     * const streetAddress = await prisma.streetAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreetAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, StreetAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreetAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreetAddresses
     * const streetAddresses = await prisma.streetAddress.findMany()
     * 
     * // Get first 10 StreetAddresses
     * const streetAddresses = await prisma.streetAddress.findMany({ take: 10 })
     * 
     * // Only select the `street_address_id`
     * const streetAddressWithStreet_address_idOnly = await prisma.streetAddress.findMany({ select: { street_address_id: true } })
     * 
     */
    findMany<T extends StreetAddressFindManyArgs>(args?: SelectSubset<T, StreetAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreetAddress.
     * @param {StreetAddressCreateArgs} args - Arguments to create a StreetAddress.
     * @example
     * // Create one StreetAddress
     * const StreetAddress = await prisma.streetAddress.create({
     *   data: {
     *     // ... data to create a StreetAddress
     *   }
     * })
     * 
     */
    create<T extends StreetAddressCreateArgs>(args: SelectSubset<T, StreetAddressCreateArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreetAddresses.
     * @param {StreetAddressCreateManyArgs} args - Arguments to create many StreetAddresses.
     * @example
     * // Create many StreetAddresses
     * const streetAddress = await prisma.streetAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreetAddressCreateManyArgs>(args?: SelectSubset<T, StreetAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreetAddresses and returns the data saved in the database.
     * @param {StreetAddressCreateManyAndReturnArgs} args - Arguments to create many StreetAddresses.
     * @example
     * // Create many StreetAddresses
     * const streetAddress = await prisma.streetAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreetAddresses and only return the `street_address_id`
     * const streetAddressWithStreet_address_idOnly = await prisma.streetAddress.createManyAndReturn({
     *   select: { street_address_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreetAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, StreetAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreetAddress.
     * @param {StreetAddressDeleteArgs} args - Arguments to delete one StreetAddress.
     * @example
     * // Delete one StreetAddress
     * const StreetAddress = await prisma.streetAddress.delete({
     *   where: {
     *     // ... filter to delete one StreetAddress
     *   }
     * })
     * 
     */
    delete<T extends StreetAddressDeleteArgs>(args: SelectSubset<T, StreetAddressDeleteArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreetAddress.
     * @param {StreetAddressUpdateArgs} args - Arguments to update one StreetAddress.
     * @example
     * // Update one StreetAddress
     * const streetAddress = await prisma.streetAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreetAddressUpdateArgs>(args: SelectSubset<T, StreetAddressUpdateArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreetAddresses.
     * @param {StreetAddressDeleteManyArgs} args - Arguments to filter StreetAddresses to delete.
     * @example
     * // Delete a few StreetAddresses
     * const { count } = await prisma.streetAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreetAddressDeleteManyArgs>(args?: SelectSubset<T, StreetAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreetAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreetAddresses
     * const streetAddress = await prisma.streetAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreetAddressUpdateManyArgs>(args: SelectSubset<T, StreetAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreetAddresses and returns the data updated in the database.
     * @param {StreetAddressUpdateManyAndReturnArgs} args - Arguments to update many StreetAddresses.
     * @example
     * // Update many StreetAddresses
     * const streetAddress = await prisma.streetAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreetAddresses and only return the `street_address_id`
     * const streetAddressWithStreet_address_idOnly = await prisma.streetAddress.updateManyAndReturn({
     *   select: { street_address_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreetAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, StreetAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreetAddress.
     * @param {StreetAddressUpsertArgs} args - Arguments to update or create a StreetAddress.
     * @example
     * // Update or create a StreetAddress
     * const streetAddress = await prisma.streetAddress.upsert({
     *   create: {
     *     // ... data to create a StreetAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreetAddress we want to update
     *   }
     * })
     */
    upsert<T extends StreetAddressUpsertArgs>(args: SelectSubset<T, StreetAddressUpsertArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreetAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressCountArgs} args - Arguments to filter StreetAddresses to count.
     * @example
     * // Count the number of StreetAddresses
     * const count = await prisma.streetAddress.count({
     *   where: {
     *     // ... the filter for the StreetAddresses we want to count
     *   }
     * })
    **/
    count<T extends StreetAddressCountArgs>(
      args?: Subset<T, StreetAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreetAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreetAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreetAddressAggregateArgs>(args: Subset<T, StreetAddressAggregateArgs>): Prisma.PrismaPromise<GetStreetAddressAggregateType<T>>

    /**
     * Group by StreetAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreetAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreetAddressGroupByArgs['orderBy'] }
        : { orderBy?: StreetAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreetAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreetAddress model
   */
  readonly fields: StreetAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreetAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreetAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCity<T extends SubCityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCityDefaultArgs<ExtArgs>>): Prisma__SubCityClient<$Result.GetResult<Prisma.$SubCityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends StreetAddress$locationsArgs<ExtArgs> = {}>(args?: Subset<T, StreetAddress$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreetAddress model
   */
  interface StreetAddressFieldRefs {
    readonly street_address_id: FieldRef<"StreetAddress", 'Int'>
    readonly sub_city_id: FieldRef<"StreetAddress", 'Int'>
    readonly street_address: FieldRef<"StreetAddress", 'String'>
    readonly zip_code: FieldRef<"StreetAddress", 'String'>
    readonly created_at: FieldRef<"StreetAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreetAddress findUnique
   */
  export type StreetAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * Filter, which StreetAddress to fetch.
     */
    where: StreetAddressWhereUniqueInput
  }

  /**
   * StreetAddress findUniqueOrThrow
   */
  export type StreetAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * Filter, which StreetAddress to fetch.
     */
    where: StreetAddressWhereUniqueInput
  }

  /**
   * StreetAddress findFirst
   */
  export type StreetAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * Filter, which StreetAddress to fetch.
     */
    where?: StreetAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetAddresses to fetch.
     */
    orderBy?: StreetAddressOrderByWithRelationInput | StreetAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreetAddresses.
     */
    cursor?: StreetAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreetAddresses.
     */
    distinct?: StreetAddressScalarFieldEnum | StreetAddressScalarFieldEnum[]
  }

  /**
   * StreetAddress findFirstOrThrow
   */
  export type StreetAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * Filter, which StreetAddress to fetch.
     */
    where?: StreetAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetAddresses to fetch.
     */
    orderBy?: StreetAddressOrderByWithRelationInput | StreetAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreetAddresses.
     */
    cursor?: StreetAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreetAddresses.
     */
    distinct?: StreetAddressScalarFieldEnum | StreetAddressScalarFieldEnum[]
  }

  /**
   * StreetAddress findMany
   */
  export type StreetAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * Filter, which StreetAddresses to fetch.
     */
    where?: StreetAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetAddresses to fetch.
     */
    orderBy?: StreetAddressOrderByWithRelationInput | StreetAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreetAddresses.
     */
    cursor?: StreetAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetAddresses.
     */
    skip?: number
    distinct?: StreetAddressScalarFieldEnum | StreetAddressScalarFieldEnum[]
  }

  /**
   * StreetAddress create
   */
  export type StreetAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a StreetAddress.
     */
    data: XOR<StreetAddressCreateInput, StreetAddressUncheckedCreateInput>
  }

  /**
   * StreetAddress createMany
   */
  export type StreetAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreetAddresses.
     */
    data: StreetAddressCreateManyInput | StreetAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreetAddress createManyAndReturn
   */
  export type StreetAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * The data used to create many StreetAddresses.
     */
    data: StreetAddressCreateManyInput | StreetAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreetAddress update
   */
  export type StreetAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a StreetAddress.
     */
    data: XOR<StreetAddressUpdateInput, StreetAddressUncheckedUpdateInput>
    /**
     * Choose, which StreetAddress to update.
     */
    where: StreetAddressWhereUniqueInput
  }

  /**
   * StreetAddress updateMany
   */
  export type StreetAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreetAddresses.
     */
    data: XOR<StreetAddressUpdateManyMutationInput, StreetAddressUncheckedUpdateManyInput>
    /**
     * Filter which StreetAddresses to update
     */
    where?: StreetAddressWhereInput
    /**
     * Limit how many StreetAddresses to update.
     */
    limit?: number
  }

  /**
   * StreetAddress updateManyAndReturn
   */
  export type StreetAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * The data used to update StreetAddresses.
     */
    data: XOR<StreetAddressUpdateManyMutationInput, StreetAddressUncheckedUpdateManyInput>
    /**
     * Filter which StreetAddresses to update
     */
    where?: StreetAddressWhereInput
    /**
     * Limit how many StreetAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreetAddress upsert
   */
  export type StreetAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the StreetAddress to update in case it exists.
     */
    where: StreetAddressWhereUniqueInput
    /**
     * In case the StreetAddress found by the `where` argument doesn't exist, create a new StreetAddress with this data.
     */
    create: XOR<StreetAddressCreateInput, StreetAddressUncheckedCreateInput>
    /**
     * In case the StreetAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreetAddressUpdateInput, StreetAddressUncheckedUpdateInput>
  }

  /**
   * StreetAddress delete
   */
  export type StreetAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
    /**
     * Filter which StreetAddress to delete.
     */
    where: StreetAddressWhereUniqueInput
  }

  /**
   * StreetAddress deleteMany
   */
  export type StreetAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreetAddresses to delete
     */
    where?: StreetAddressWhereInput
    /**
     * Limit how many StreetAddresses to delete.
     */
    limit?: number
  }

  /**
   * StreetAddress.locations
   */
  export type StreetAddress$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * StreetAddress without action
   */
  export type StreetAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetAddress
     */
    select?: StreetAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetAddress
     */
    omit?: StreetAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetAddressInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    location_id: number | null
    lot_id: number | null
    street_address_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationSumAggregateOutputType = {
    location_id: number | null
    lot_id: number | null
    street_address_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationMinAggregateOutputType = {
    location_id: number | null
    lot_id: number | null
    street_address_id: number | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    location_id: number | null
    lot_id: number | null
    street_address_id: number | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
  }

  export type LocationCountAggregateOutputType = {
    location_id: number
    lot_id: number
    street_address_id: number
    latitude: number
    longitude: number
    created_at: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    location_id?: true
    lot_id?: true
    street_address_id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    location_id?: true
    lot_id?: true
    street_address_id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    location_id?: true
    lot_id?: true
    street_address_id?: true
    latitude?: true
    longitude?: true
    created_at?: true
  }

  export type LocationMaxAggregateInputType = {
    location_id?: true
    lot_id?: true
    street_address_id?: true
    latitude?: true
    longitude?: true
    created_at?: true
  }

  export type LocationCountAggregateInputType = {
    location_id?: true
    lot_id?: true
    street_address_id?: true
    latitude?: true
    longitude?: true
    created_at?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    location_id: number
    lot_id: number
    street_address_id: number
    latitude: number
    longitude: number
    created_at: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    lot_id?: boolean
    street_address_id?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    streetAddress?: boolean | StreetAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    lot_id?: boolean
    street_address_id?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    streetAddress?: boolean | StreetAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    lot_id?: boolean
    street_address_id?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    streetAddress?: boolean | StreetAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    location_id?: boolean
    lot_id?: boolean
    street_address_id?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"location_id" | "lot_id" | "street_address_id" | "latitude" | "longitude" | "created_at", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    streetAddress?: boolean | StreetAddressDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    streetAddress?: boolean | StreetAddressDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    streetAddress?: boolean | StreetAddressDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      streetAddress: Prisma.$StreetAddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      location_id: number
      lot_id: number
      street_address_id: number
      latitude: number
      longitude: number
      created_at: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `location_id`
     * const locationWithLocation_idOnly = await prisma.location.findMany({ select: { location_id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `location_id`
     * const locationWithLocation_idOnly = await prisma.location.createManyAndReturn({
     *   select: { location_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `location_id`
     * const locationWithLocation_idOnly = await prisma.location.updateManyAndReturn({
     *   select: { location_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    streetAddress<T extends StreetAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreetAddressDefaultArgs<ExtArgs>>): Prisma__StreetAddressClient<$Result.GetResult<Prisma.$StreetAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly location_id: FieldRef<"Location", 'Int'>
    readonly lot_id: FieldRef<"Location", 'Int'>
    readonly street_address_id: FieldRef<"Location", 'Int'>
    readonly latitude: FieldRef<"Location", 'Float'>
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly created_at: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLot
   */

  export type AggregateParkingLot = {
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  export type ParkingLotAvgAggregateOutputType = {
    lot_id: number | null
    owner_id: number | null
    capacity: number | null
  }

  export type ParkingLotSumAggregateOutputType = {
    lot_id: number | null
    owner_id: number | null
    capacity: number | null
  }

  export type ParkingLotMinAggregateOutputType = {
    lot_id: number | null
    owner_id: number | null
    lot_name: string | null
    image: string | null
    capacity: number | null
    created_at: Date | null
  }

  export type ParkingLotMaxAggregateOutputType = {
    lot_id: number | null
    owner_id: number | null
    lot_name: string | null
    image: string | null
    capacity: number | null
    created_at: Date | null
  }

  export type ParkingLotCountAggregateOutputType = {
    lot_id: number
    owner_id: number
    lot_name: number
    image: number
    capacity: number
    created_at: number
    _all: number
  }


  export type ParkingLotAvgAggregateInputType = {
    lot_id?: true
    owner_id?: true
    capacity?: true
  }

  export type ParkingLotSumAggregateInputType = {
    lot_id?: true
    owner_id?: true
    capacity?: true
  }

  export type ParkingLotMinAggregateInputType = {
    lot_id?: true
    owner_id?: true
    lot_name?: true
    image?: true
    capacity?: true
    created_at?: true
  }

  export type ParkingLotMaxAggregateInputType = {
    lot_id?: true
    owner_id?: true
    lot_name?: true
    image?: true
    capacity?: true
    created_at?: true
  }

  export type ParkingLotCountAggregateInputType = {
    lot_id?: true
    owner_id?: true
    lot_name?: true
    image?: true
    capacity?: true
    created_at?: true
    _all?: true
  }

  export type ParkingLotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLot to aggregate.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLots
    **/
    _count?: true | ParkingLotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotMaxAggregateInputType
  }

  export type GetParkingLotAggregateType<T extends ParkingLotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLot[P]>
      : GetScalarType<T[P], AggregateParkingLot[P]>
  }




  export type ParkingLotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotWhereInput
    orderBy?: ParkingLotOrderByWithAggregationInput | ParkingLotOrderByWithAggregationInput[]
    by: ParkingLotScalarFieldEnum[] | ParkingLotScalarFieldEnum
    having?: ParkingLotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotCountAggregateInputType | true
    _avg?: ParkingLotAvgAggregateInputType
    _sum?: ParkingLotSumAggregateInputType
    _min?: ParkingLotMinAggregateInputType
    _max?: ParkingLotMaxAggregateInputType
  }

  export type ParkingLotGroupByOutputType = {
    lot_id: number
    owner_id: number
    lot_name: string
    image: string | null
    capacity: number
    created_at: Date
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  type GetParkingLotGroupByPayload<T extends ParkingLotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lot_id?: boolean
    owner_id?: boolean
    lot_name?: boolean
    image?: boolean
    capacity?: boolean
    created_at?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    spaces?: boolean | ParkingLot$spacesArgs<ExtArgs>
    locations?: boolean | ParkingLot$locationsArgs<ExtArgs>
    prices?: boolean | ParkingLot$pricesArgs<ExtArgs>
    reviews?: boolean | ParkingLot$reviewsArgs<ExtArgs>
    booking?: boolean | ParkingLot$bookingArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lot_id?: boolean
    owner_id?: boolean
    lot_name?: boolean
    image?: boolean
    capacity?: boolean
    created_at?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lot_id?: boolean
    owner_id?: boolean
    lot_name?: boolean
    image?: boolean
    capacity?: boolean
    created_at?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectScalar = {
    lot_id?: boolean
    owner_id?: boolean
    lot_name?: boolean
    image?: boolean
    capacity?: boolean
    created_at?: boolean
  }

  export type ParkingLotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lot_id" | "owner_id" | "lot_name" | "image" | "capacity" | "created_at", ExtArgs["result"]["parkingLot"]>
  export type ParkingLotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    spaces?: boolean | ParkingLot$spacesArgs<ExtArgs>
    locations?: boolean | ParkingLot$locationsArgs<ExtArgs>
    prices?: boolean | ParkingLot$pricesArgs<ExtArgs>
    reviews?: boolean | ParkingLot$reviewsArgs<ExtArgs>
    booking?: boolean | ParkingLot$bookingArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingLotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type ParkingLotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $ParkingLotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLot"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
      spaces: Prisma.$ParkingSpacePayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
      prices: Prisma.$PricePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      lot_id: number
      owner_id: number
      lot_name: string
      image: string | null
      capacity: number
      created_at: Date
    }, ExtArgs["result"]["parkingLot"]>
    composites: {}
  }

  type ParkingLotGetPayload<S extends boolean | null | undefined | ParkingLotDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotPayload, S>

  type ParkingLotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingLotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingLotCountAggregateInputType | true
    }

  export interface ParkingLotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLot'], meta: { name: 'ParkingLot' } }
    /**
     * Find zero or one ParkingLot that matches the filter.
     * @param {ParkingLotFindUniqueArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotFindUniqueArgs>(args: SelectSubset<T, ParkingLotFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingLot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingLotFindUniqueOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotFindFirstArgs>(args?: SelectSubset<T, ParkingLotFindFirstArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingLots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany()
     * 
     * // Get first 10 ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany({ take: 10 })
     * 
     * // Only select the `lot_id`
     * const parkingLotWithLot_idOnly = await prisma.parkingLot.findMany({ select: { lot_id: true } })
     * 
     */
    findMany<T extends ParkingLotFindManyArgs>(args?: SelectSubset<T, ParkingLotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingLot.
     * @param {ParkingLotCreateArgs} args - Arguments to create a ParkingLot.
     * @example
     * // Create one ParkingLot
     * const ParkingLot = await prisma.parkingLot.create({
     *   data: {
     *     // ... data to create a ParkingLot
     *   }
     * })
     * 
     */
    create<T extends ParkingLotCreateArgs>(args: SelectSubset<T, ParkingLotCreateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingLots.
     * @param {ParkingLotCreateManyArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotCreateManyArgs>(args?: SelectSubset<T, ParkingLotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLots and returns the data saved in the database.
     * @param {ParkingLotCreateManyAndReturnArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLots and only return the `lot_id`
     * const parkingLotWithLot_idOnly = await prisma.parkingLot.createManyAndReturn({
     *   select: { lot_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingLot.
     * @param {ParkingLotDeleteArgs} args - Arguments to delete one ParkingLot.
     * @example
     * // Delete one ParkingLot
     * const ParkingLot = await prisma.parkingLot.delete({
     *   where: {
     *     // ... filter to delete one ParkingLot
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotDeleteArgs>(args: SelectSubset<T, ParkingLotDeleteArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingLot.
     * @param {ParkingLotUpdateArgs} args - Arguments to update one ParkingLot.
     * @example
     * // Update one ParkingLot
     * const parkingLot = await prisma.parkingLot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotUpdateArgs>(args: SelectSubset<T, ParkingLotUpdateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingLots.
     * @param {ParkingLotDeleteManyArgs} args - Arguments to filter ParkingLots to delete.
     * @example
     * // Delete a few ParkingLots
     * const { count } = await prisma.parkingLot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotDeleteManyArgs>(args?: SelectSubset<T, ParkingLotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotUpdateManyArgs>(args: SelectSubset<T, ParkingLotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots and returns the data updated in the database.
     * @param {ParkingLotUpdateManyAndReturnArgs} args - Arguments to update many ParkingLots.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingLots and only return the `lot_id`
     * const parkingLotWithLot_idOnly = await prisma.parkingLot.updateManyAndReturn({
     *   select: { lot_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingLotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingLotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingLot.
     * @param {ParkingLotUpsertArgs} args - Arguments to update or create a ParkingLot.
     * @example
     * // Update or create a ParkingLot
     * const parkingLot = await prisma.parkingLot.upsert({
     *   create: {
     *     // ... data to create a ParkingLot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotUpsertArgs>(args: SelectSubset<T, ParkingLotUpsertArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotCountArgs} args - Arguments to filter ParkingLots to count.
     * @example
     * // Count the number of ParkingLots
     * const count = await prisma.parkingLot.count({
     *   where: {
     *     // ... the filter for the ParkingLots we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotCountArgs>(
      args?: Subset<T, ParkingLotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotAggregateArgs>(args: Subset<T, ParkingLotAggregateArgs>): Prisma.PrismaPromise<GetParkingLotAggregateType<T>>

    /**
     * Group by ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLot model
   */
  readonly fields: ParkingLotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spaces<T extends ParkingLot$spacesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$spacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends ParkingLot$locationsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prices<T extends ParkingLot$pricesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends ParkingLot$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends ParkingLot$bookingArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLot model
   */
  interface ParkingLotFieldRefs {
    readonly lot_id: FieldRef<"ParkingLot", 'Int'>
    readonly owner_id: FieldRef<"ParkingLot", 'Int'>
    readonly lot_name: FieldRef<"ParkingLot", 'String'>
    readonly image: FieldRef<"ParkingLot", 'String'>
    readonly capacity: FieldRef<"ParkingLot", 'Int'>
    readonly created_at: FieldRef<"ParkingLot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLot findUnique
   */
  export type ParkingLotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findUniqueOrThrow
   */
  export type ParkingLotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findFirst
   */
  export type ParkingLotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findFirstOrThrow
   */
  export type ParkingLotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findMany
   */
  export type ParkingLotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLots to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot create
   */
  export type ParkingLotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLot.
     */
    data: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
  }

  /**
   * ParkingLot createMany
   */
  export type ParkingLotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLot createManyAndReturn
   */
  export type ParkingLotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingLot update
   */
  export type ParkingLotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLot.
     */
    data: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
    /**
     * Choose, which ParkingLot to update.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot updateMany
   */
  export type ParkingLotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to update.
     */
    limit?: number
  }

  /**
   * ParkingLot updateManyAndReturn
   */
  export type ParkingLotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingLot upsert
   */
  export type ParkingLotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLot to update in case it exists.
     */
    where: ParkingLotWhereUniqueInput
    /**
     * In case the ParkingLot found by the `where` argument doesn't exist, create a new ParkingLot with this data.
     */
    create: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
    /**
     * In case the ParkingLot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
  }

  /**
   * ParkingLot delete
   */
  export type ParkingLotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter which ParkingLot to delete.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot deleteMany
   */
  export type ParkingLotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLots to delete
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to delete.
     */
    limit?: number
  }

  /**
   * ParkingLot.spaces
   */
  export type ParkingLot$spacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    where?: ParkingSpaceWhereInput
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    cursor?: ParkingSpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingLot.locations
   */
  export type ParkingLot$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * ParkingLot.prices
   */
  export type ParkingLot$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * ParkingLot.reviews
   */
  export type ParkingLot$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * ParkingLot.booking
   */
  export type ParkingLot$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingLot without action
   */
  export type ParkingLotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSpace
   */

  export type AggregateParkingSpace = {
    _count: ParkingSpaceCountAggregateOutputType | null
    _avg: ParkingSpaceAvgAggregateOutputType | null
    _sum: ParkingSpaceSumAggregateOutputType | null
    _min: ParkingSpaceMinAggregateOutputType | null
    _max: ParkingSpaceMaxAggregateOutputType | null
  }

  export type ParkingSpaceAvgAggregateOutputType = {
    space_id: number | null
    lot_id: number | null
  }

  export type ParkingSpaceSumAggregateOutputType = {
    space_id: number | null
    lot_id: number | null
  }

  export type ParkingSpaceMinAggregateOutputType = {
    space_id: number | null
    lot_id: number | null
    space_number: string | null
    is_handicap: boolean | null
    status: $Enums.SpaceStatus | null
    created_at: Date | null
  }

  export type ParkingSpaceMaxAggregateOutputType = {
    space_id: number | null
    lot_id: number | null
    space_number: string | null
    is_handicap: boolean | null
    status: $Enums.SpaceStatus | null
    created_at: Date | null
  }

  export type ParkingSpaceCountAggregateOutputType = {
    space_id: number
    lot_id: number
    space_number: number
    is_handicap: number
    status: number
    created_at: number
    _all: number
  }


  export type ParkingSpaceAvgAggregateInputType = {
    space_id?: true
    lot_id?: true
  }

  export type ParkingSpaceSumAggregateInputType = {
    space_id?: true
    lot_id?: true
  }

  export type ParkingSpaceMinAggregateInputType = {
    space_id?: true
    lot_id?: true
    space_number?: true
    is_handicap?: true
    status?: true
    created_at?: true
  }

  export type ParkingSpaceMaxAggregateInputType = {
    space_id?: true
    lot_id?: true
    space_number?: true
    is_handicap?: true
    status?: true
    created_at?: true
  }

  export type ParkingSpaceCountAggregateInputType = {
    space_id?: true
    lot_id?: true
    space_number?: true
    is_handicap?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ParkingSpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpace to aggregate.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSpaces
    **/
    _count?: true | ParkingSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSpaceMaxAggregateInputType
  }

  export type GetParkingSpaceAggregateType<T extends ParkingSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSpace[P]>
      : GetScalarType<T[P], AggregateParkingSpace[P]>
  }




  export type ParkingSpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpaceWhereInput
    orderBy?: ParkingSpaceOrderByWithAggregationInput | ParkingSpaceOrderByWithAggregationInput[]
    by: ParkingSpaceScalarFieldEnum[] | ParkingSpaceScalarFieldEnum
    having?: ParkingSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSpaceCountAggregateInputType | true
    _avg?: ParkingSpaceAvgAggregateInputType
    _sum?: ParkingSpaceSumAggregateInputType
    _min?: ParkingSpaceMinAggregateInputType
    _max?: ParkingSpaceMaxAggregateInputType
  }

  export type ParkingSpaceGroupByOutputType = {
    space_id: number
    lot_id: number
    space_number: string
    is_handicap: boolean
    status: $Enums.SpaceStatus
    created_at: Date
    _count: ParkingSpaceCountAggregateOutputType | null
    _avg: ParkingSpaceAvgAggregateOutputType | null
    _sum: ParkingSpaceSumAggregateOutputType | null
    _min: ParkingSpaceMinAggregateOutputType | null
    _max: ParkingSpaceMaxAggregateOutputType | null
  }

  type GetParkingSpaceGroupByPayload<T extends ParkingSpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSpaceGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    space_id?: boolean
    lot_id?: boolean
    space_number?: boolean
    is_handicap?: boolean
    status?: boolean
    created_at?: boolean
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    availability?: boolean | ParkingSpace$availabilityArgs<ExtArgs>
    bookings?: boolean | ParkingSpace$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpace"]>

  export type ParkingSpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    space_id?: boolean
    lot_id?: boolean
    space_number?: boolean
    is_handicap?: boolean
    status?: boolean
    created_at?: boolean
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpace"]>

  export type ParkingSpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    space_id?: boolean
    lot_id?: boolean
    space_number?: boolean
    is_handicap?: boolean
    status?: boolean
    created_at?: boolean
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpace"]>

  export type ParkingSpaceSelectScalar = {
    space_id?: boolean
    lot_id?: boolean
    space_number?: boolean
    is_handicap?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type ParkingSpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"space_id" | "lot_id" | "space_number" | "is_handicap" | "status" | "created_at", ExtArgs["result"]["parkingSpace"]>
  export type ParkingSpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    availability?: boolean | ParkingSpace$availabilityArgs<ExtArgs>
    bookings?: boolean | ParkingSpace$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type ParkingSpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $ParkingSpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSpace"
    objects: {
      lot: Prisma.$ParkingLotPayload<ExtArgs>
      availability: Prisma.$AvailabilityLogPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      space_id: number
      lot_id: number
      space_number: string
      is_handicap: boolean
      status: $Enums.SpaceStatus
      created_at: Date
    }, ExtArgs["result"]["parkingSpace"]>
    composites: {}
  }

  type ParkingSpaceGetPayload<S extends boolean | null | undefined | ParkingSpaceDefaultArgs> = $Result.GetResult<Prisma.$ParkingSpacePayload, S>

  type ParkingSpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSpaceCountAggregateInputType | true
    }

  export interface ParkingSpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSpace'], meta: { name: 'ParkingSpace' } }
    /**
     * Find zero or one ParkingSpace that matches the filter.
     * @param {ParkingSpaceFindUniqueArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSpaceFindUniqueArgs>(args: SelectSubset<T, ParkingSpaceFindUniqueArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSpaceFindUniqueOrThrowArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceFindFirstArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSpaceFindFirstArgs>(args?: SelectSubset<T, ParkingSpaceFindFirstArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceFindFirstOrThrowArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSpaces
     * const parkingSpaces = await prisma.parkingSpace.findMany()
     * 
     * // Get first 10 ParkingSpaces
     * const parkingSpaces = await prisma.parkingSpace.findMany({ take: 10 })
     * 
     * // Only select the `space_id`
     * const parkingSpaceWithSpace_idOnly = await prisma.parkingSpace.findMany({ select: { space_id: true } })
     * 
     */
    findMany<T extends ParkingSpaceFindManyArgs>(args?: SelectSubset<T, ParkingSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSpace.
     * @param {ParkingSpaceCreateArgs} args - Arguments to create a ParkingSpace.
     * @example
     * // Create one ParkingSpace
     * const ParkingSpace = await prisma.parkingSpace.create({
     *   data: {
     *     // ... data to create a ParkingSpace
     *   }
     * })
     * 
     */
    create<T extends ParkingSpaceCreateArgs>(args: SelectSubset<T, ParkingSpaceCreateArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSpaces.
     * @param {ParkingSpaceCreateManyArgs} args - Arguments to create many ParkingSpaces.
     * @example
     * // Create many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSpaceCreateManyArgs>(args?: SelectSubset<T, ParkingSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSpaces and returns the data saved in the database.
     * @param {ParkingSpaceCreateManyAndReturnArgs} args - Arguments to create many ParkingSpaces.
     * @example
     * // Create many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSpaces and only return the `space_id`
     * const parkingSpaceWithSpace_idOnly = await prisma.parkingSpace.createManyAndReturn({
     *   select: { space_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSpace.
     * @param {ParkingSpaceDeleteArgs} args - Arguments to delete one ParkingSpace.
     * @example
     * // Delete one ParkingSpace
     * const ParkingSpace = await prisma.parkingSpace.delete({
     *   where: {
     *     // ... filter to delete one ParkingSpace
     *   }
     * })
     * 
     */
    delete<T extends ParkingSpaceDeleteArgs>(args: SelectSubset<T, ParkingSpaceDeleteArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSpace.
     * @param {ParkingSpaceUpdateArgs} args - Arguments to update one ParkingSpace.
     * @example
     * // Update one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSpaceUpdateArgs>(args: SelectSubset<T, ParkingSpaceUpdateArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSpaces.
     * @param {ParkingSpaceDeleteManyArgs} args - Arguments to filter ParkingSpaces to delete.
     * @example
     * // Delete a few ParkingSpaces
     * const { count } = await prisma.parkingSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSpaceDeleteManyArgs>(args?: SelectSubset<T, ParkingSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSpaceUpdateManyArgs>(args: SelectSubset<T, ParkingSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpaces and returns the data updated in the database.
     * @param {ParkingSpaceUpdateManyAndReturnArgs} args - Arguments to update many ParkingSpaces.
     * @example
     * // Update many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSpaces and only return the `space_id`
     * const parkingSpaceWithSpace_idOnly = await prisma.parkingSpace.updateManyAndReturn({
     *   select: { space_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingSpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSpace.
     * @param {ParkingSpaceUpsertArgs} args - Arguments to update or create a ParkingSpace.
     * @example
     * // Update or create a ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.upsert({
     *   create: {
     *     // ... data to create a ParkingSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSpace we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSpaceUpsertArgs>(args: SelectSubset<T, ParkingSpaceUpsertArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceCountArgs} args - Arguments to filter ParkingSpaces to count.
     * @example
     * // Count the number of ParkingSpaces
     * const count = await prisma.parkingSpace.count({
     *   where: {
     *     // ... the filter for the ParkingSpaces we want to count
     *   }
     * })
    **/
    count<T extends ParkingSpaceCountArgs>(
      args?: Subset<T, ParkingSpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingSpaceAggregateArgs>(args: Subset<T, ParkingSpaceAggregateArgs>): Prisma.PrismaPromise<GetParkingSpaceAggregateType<T>>

    /**
     * Group by ParkingSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSpaceGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSpace model
   */
  readonly fields: ParkingSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availability<T extends ParkingSpace$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpace$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends ParkingSpace$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpace$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingSpace model
   */
  interface ParkingSpaceFieldRefs {
    readonly space_id: FieldRef<"ParkingSpace", 'Int'>
    readonly lot_id: FieldRef<"ParkingSpace", 'Int'>
    readonly space_number: FieldRef<"ParkingSpace", 'String'>
    readonly is_handicap: FieldRef<"ParkingSpace", 'Boolean'>
    readonly status: FieldRef<"ParkingSpace", 'SpaceStatus'>
    readonly created_at: FieldRef<"ParkingSpace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSpace findUnique
   */
  export type ParkingSpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace findUniqueOrThrow
   */
  export type ParkingSpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace findFirst
   */
  export type ParkingSpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpaces.
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpaces.
     */
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingSpace findFirstOrThrow
   */
  export type ParkingSpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpaces.
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpaces.
     */
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingSpace findMany
   */
  export type ParkingSpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpaces to fetch.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSpaces.
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingSpace create
   */
  export type ParkingSpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSpace.
     */
    data: XOR<ParkingSpaceCreateInput, ParkingSpaceUncheckedCreateInput>
  }

  /**
   * ParkingSpace createMany
   */
  export type ParkingSpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSpaces.
     */
    data: ParkingSpaceCreateManyInput | ParkingSpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSpace createManyAndReturn
   */
  export type ParkingSpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSpaces.
     */
    data: ParkingSpaceCreateManyInput | ParkingSpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpace update
   */
  export type ParkingSpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSpace.
     */
    data: XOR<ParkingSpaceUpdateInput, ParkingSpaceUncheckedUpdateInput>
    /**
     * Choose, which ParkingSpace to update.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace updateMany
   */
  export type ParkingSpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSpaces.
     */
    data: XOR<ParkingSpaceUpdateManyMutationInput, ParkingSpaceUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpaces to update
     */
    where?: ParkingSpaceWhereInput
    /**
     * Limit how many ParkingSpaces to update.
     */
    limit?: number
  }

  /**
   * ParkingSpace updateManyAndReturn
   */
  export type ParkingSpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSpaces.
     */
    data: XOR<ParkingSpaceUpdateManyMutationInput, ParkingSpaceUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpaces to update
     */
    where?: ParkingSpaceWhereInput
    /**
     * Limit how many ParkingSpaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpace upsert
   */
  export type ParkingSpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSpace to update in case it exists.
     */
    where: ParkingSpaceWhereUniqueInput
    /**
     * In case the ParkingSpace found by the `where` argument doesn't exist, create a new ParkingSpace with this data.
     */
    create: XOR<ParkingSpaceCreateInput, ParkingSpaceUncheckedCreateInput>
    /**
     * In case the ParkingSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSpaceUpdateInput, ParkingSpaceUncheckedUpdateInput>
  }

  /**
   * ParkingSpace delete
   */
  export type ParkingSpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter which ParkingSpace to delete.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace deleteMany
   */
  export type ParkingSpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpaces to delete
     */
    where?: ParkingSpaceWhereInput
    /**
     * Limit how many ParkingSpaces to delete.
     */
    limit?: number
  }

  /**
   * ParkingSpace.availability
   */
  export type ParkingSpace$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    where?: AvailabilityLogWhereInput
    orderBy?: AvailabilityLogOrderByWithRelationInput | AvailabilityLogOrderByWithRelationInput[]
    cursor?: AvailabilityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityLogScalarFieldEnum | AvailabilityLogScalarFieldEnum[]
  }

  /**
   * ParkingSpace.bookings
   */
  export type ParkingSpace$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingSpace without action
   */
  export type ParkingSpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilityLog
   */

  export type AggregateAvailabilityLog = {
    _count: AvailabilityLogCountAggregateOutputType | null
    _avg: AvailabilityLogAvgAggregateOutputType | null
    _sum: AvailabilityLogSumAggregateOutputType | null
    _min: AvailabilityLogMinAggregateOutputType | null
    _max: AvailabilityLogMaxAggregateOutputType | null
  }

  export type AvailabilityLogAvgAggregateOutputType = {
    log_id: number | null
    space_id: number | null
  }

  export type AvailabilityLogSumAggregateOutputType = {
    log_id: number | null
    space_id: number | null
  }

  export type AvailabilityLogMinAggregateOutputType = {
    log_id: number | null
    space_id: number | null
    status: string | null
    timestamp: Date | null
  }

  export type AvailabilityLogMaxAggregateOutputType = {
    log_id: number | null
    space_id: number | null
    status: string | null
    timestamp: Date | null
  }

  export type AvailabilityLogCountAggregateOutputType = {
    log_id: number
    space_id: number
    status: number
    timestamp: number
    _all: number
  }


  export type AvailabilityLogAvgAggregateInputType = {
    log_id?: true
    space_id?: true
  }

  export type AvailabilityLogSumAggregateInputType = {
    log_id?: true
    space_id?: true
  }

  export type AvailabilityLogMinAggregateInputType = {
    log_id?: true
    space_id?: true
    status?: true
    timestamp?: true
  }

  export type AvailabilityLogMaxAggregateInputType = {
    log_id?: true
    space_id?: true
    status?: true
    timestamp?: true
  }

  export type AvailabilityLogCountAggregateInputType = {
    log_id?: true
    space_id?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type AvailabilityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityLog to aggregate.
     */
    where?: AvailabilityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityLogs to fetch.
     */
    orderBy?: AvailabilityLogOrderByWithRelationInput | AvailabilityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityLogs
    **/
    _count?: true | AvailabilityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityLogMaxAggregateInputType
  }

  export type GetAvailabilityLogAggregateType<T extends AvailabilityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityLog[P]>
      : GetScalarType<T[P], AggregateAvailabilityLog[P]>
  }




  export type AvailabilityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityLogWhereInput
    orderBy?: AvailabilityLogOrderByWithAggregationInput | AvailabilityLogOrderByWithAggregationInput[]
    by: AvailabilityLogScalarFieldEnum[] | AvailabilityLogScalarFieldEnum
    having?: AvailabilityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityLogCountAggregateInputType | true
    _avg?: AvailabilityLogAvgAggregateInputType
    _sum?: AvailabilityLogSumAggregateInputType
    _min?: AvailabilityLogMinAggregateInputType
    _max?: AvailabilityLogMaxAggregateInputType
  }

  export type AvailabilityLogGroupByOutputType = {
    log_id: number
    space_id: number
    status: string
    timestamp: Date
    _count: AvailabilityLogCountAggregateOutputType | null
    _avg: AvailabilityLogAvgAggregateOutputType | null
    _sum: AvailabilityLogSumAggregateOutputType | null
    _min: AvailabilityLogMinAggregateOutputType | null
    _max: AvailabilityLogMaxAggregateOutputType | null
  }

  type GetAvailabilityLogGroupByPayload<T extends AvailabilityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityLogGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityLogGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    space_id?: boolean
    status?: boolean
    timestamp?: boolean
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityLog"]>

  export type AvailabilityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    space_id?: boolean
    status?: boolean
    timestamp?: boolean
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityLog"]>

  export type AvailabilityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    space_id?: boolean
    status?: boolean
    timestamp?: boolean
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityLog"]>

  export type AvailabilityLogSelectScalar = {
    log_id?: boolean
    space_id?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type AvailabilityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "space_id" | "status" | "timestamp", ExtArgs["result"]["availabilityLog"]>
  export type AvailabilityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }
  export type AvailabilityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }
  export type AvailabilityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }

  export type $AvailabilityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityLog"
    objects: {
      space: Prisma.$ParkingSpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      space_id: number
      status: string
      timestamp: Date
    }, ExtArgs["result"]["availabilityLog"]>
    composites: {}
  }

  type AvailabilityLogGetPayload<S extends boolean | null | undefined | AvailabilityLogDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityLogPayload, S>

  type AvailabilityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityLogCountAggregateInputType | true
    }

  export interface AvailabilityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityLog'], meta: { name: 'AvailabilityLog' } }
    /**
     * Find zero or one AvailabilityLog that matches the filter.
     * @param {AvailabilityLogFindUniqueArgs} args - Arguments to find a AvailabilityLog
     * @example
     * // Get one AvailabilityLog
     * const availabilityLog = await prisma.availabilityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityLogFindUniqueArgs>(args: SelectSubset<T, AvailabilityLogFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityLogFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityLog
     * @example
     * // Get one AvailabilityLog
     * const availabilityLog = await prisma.availabilityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogFindFirstArgs} args - Arguments to find a AvailabilityLog
     * @example
     * // Get one AvailabilityLog
     * const availabilityLog = await prisma.availabilityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityLogFindFirstArgs>(args?: SelectSubset<T, AvailabilityLogFindFirstArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogFindFirstOrThrowArgs} args - Arguments to find a AvailabilityLog
     * @example
     * // Get one AvailabilityLog
     * const availabilityLog = await prisma.availabilityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityLogs
     * const availabilityLogs = await prisma.availabilityLog.findMany()
     * 
     * // Get first 10 AvailabilityLogs
     * const availabilityLogs = await prisma.availabilityLog.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const availabilityLogWithLog_idOnly = await prisma.availabilityLog.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends AvailabilityLogFindManyArgs>(args?: SelectSubset<T, AvailabilityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilityLog.
     * @param {AvailabilityLogCreateArgs} args - Arguments to create a AvailabilityLog.
     * @example
     * // Create one AvailabilityLog
     * const AvailabilityLog = await prisma.availabilityLog.create({
     *   data: {
     *     // ... data to create a AvailabilityLog
     *   }
     * })
     * 
     */
    create<T extends AvailabilityLogCreateArgs>(args: SelectSubset<T, AvailabilityLogCreateArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilityLogs.
     * @param {AvailabilityLogCreateManyArgs} args - Arguments to create many AvailabilityLogs.
     * @example
     * // Create many AvailabilityLogs
     * const availabilityLog = await prisma.availabilityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityLogCreateManyArgs>(args?: SelectSubset<T, AvailabilityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityLogs and returns the data saved in the database.
     * @param {AvailabilityLogCreateManyAndReturnArgs} args - Arguments to create many AvailabilityLogs.
     * @example
     * // Create many AvailabilityLogs
     * const availabilityLog = await prisma.availabilityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityLogs and only return the `log_id`
     * const availabilityLogWithLog_idOnly = await prisma.availabilityLog.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilityLog.
     * @param {AvailabilityLogDeleteArgs} args - Arguments to delete one AvailabilityLog.
     * @example
     * // Delete one AvailabilityLog
     * const AvailabilityLog = await prisma.availabilityLog.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityLog
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityLogDeleteArgs>(args: SelectSubset<T, AvailabilityLogDeleteArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilityLog.
     * @param {AvailabilityLogUpdateArgs} args - Arguments to update one AvailabilityLog.
     * @example
     * // Update one AvailabilityLog
     * const availabilityLog = await prisma.availabilityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityLogUpdateArgs>(args: SelectSubset<T, AvailabilityLogUpdateArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilityLogs.
     * @param {AvailabilityLogDeleteManyArgs} args - Arguments to filter AvailabilityLogs to delete.
     * @example
     * // Delete a few AvailabilityLogs
     * const { count } = await prisma.availabilityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityLogDeleteManyArgs>(args?: SelectSubset<T, AvailabilityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityLogs
     * const availabilityLog = await prisma.availabilityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityLogUpdateManyArgs>(args: SelectSubset<T, AvailabilityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityLogs and returns the data updated in the database.
     * @param {AvailabilityLogUpdateManyAndReturnArgs} args - Arguments to update many AvailabilityLogs.
     * @example
     * // Update many AvailabilityLogs
     * const availabilityLog = await prisma.availabilityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilityLogs and only return the `log_id`
     * const availabilityLogWithLog_idOnly = await prisma.availabilityLog.updateManyAndReturn({
     *   select: { log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilityLog.
     * @param {AvailabilityLogUpsertArgs} args - Arguments to update or create a AvailabilityLog.
     * @example
     * // Update or create a AvailabilityLog
     * const availabilityLog = await prisma.availabilityLog.upsert({
     *   create: {
     *     // ... data to create a AvailabilityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityLog we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityLogUpsertArgs>(args: SelectSubset<T, AvailabilityLogUpsertArgs<ExtArgs>>): Prisma__AvailabilityLogClient<$Result.GetResult<Prisma.$AvailabilityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogCountArgs} args - Arguments to filter AvailabilityLogs to count.
     * @example
     * // Count the number of AvailabilityLogs
     * const count = await prisma.availabilityLog.count({
     *   where: {
     *     // ... the filter for the AvailabilityLogs we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityLogCountArgs>(
      args?: Subset<T, AvailabilityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityLogAggregateArgs>(args: Subset<T, AvailabilityLogAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityLogAggregateType<T>>

    /**
     * Group by AvailabilityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityLogGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityLog model
   */
  readonly fields: AvailabilityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends ParkingSpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpaceDefaultArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailabilityLog model
   */
  interface AvailabilityLogFieldRefs {
    readonly log_id: FieldRef<"AvailabilityLog", 'Int'>
    readonly space_id: FieldRef<"AvailabilityLog", 'Int'>
    readonly status: FieldRef<"AvailabilityLog", 'String'>
    readonly timestamp: FieldRef<"AvailabilityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityLog findUnique
   */
  export type AvailabilityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityLog to fetch.
     */
    where: AvailabilityLogWhereUniqueInput
  }

  /**
   * AvailabilityLog findUniqueOrThrow
   */
  export type AvailabilityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityLog to fetch.
     */
    where: AvailabilityLogWhereUniqueInput
  }

  /**
   * AvailabilityLog findFirst
   */
  export type AvailabilityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityLog to fetch.
     */
    where?: AvailabilityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityLogs to fetch.
     */
    orderBy?: AvailabilityLogOrderByWithRelationInput | AvailabilityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityLogs.
     */
    cursor?: AvailabilityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityLogs.
     */
    distinct?: AvailabilityLogScalarFieldEnum | AvailabilityLogScalarFieldEnum[]
  }

  /**
   * AvailabilityLog findFirstOrThrow
   */
  export type AvailabilityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityLog to fetch.
     */
    where?: AvailabilityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityLogs to fetch.
     */
    orderBy?: AvailabilityLogOrderByWithRelationInput | AvailabilityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityLogs.
     */
    cursor?: AvailabilityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityLogs.
     */
    distinct?: AvailabilityLogScalarFieldEnum | AvailabilityLogScalarFieldEnum[]
  }

  /**
   * AvailabilityLog findMany
   */
  export type AvailabilityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityLogs to fetch.
     */
    where?: AvailabilityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityLogs to fetch.
     */
    orderBy?: AvailabilityLogOrderByWithRelationInput | AvailabilityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityLogs.
     */
    cursor?: AvailabilityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityLogs.
     */
    skip?: number
    distinct?: AvailabilityLogScalarFieldEnum | AvailabilityLogScalarFieldEnum[]
  }

  /**
   * AvailabilityLog create
   */
  export type AvailabilityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityLog.
     */
    data: XOR<AvailabilityLogCreateInput, AvailabilityLogUncheckedCreateInput>
  }

  /**
   * AvailabilityLog createMany
   */
  export type AvailabilityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityLogs.
     */
    data: AvailabilityLogCreateManyInput | AvailabilityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityLog createManyAndReturn
   */
  export type AvailabilityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilityLogs.
     */
    data: AvailabilityLogCreateManyInput | AvailabilityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityLog update
   */
  export type AvailabilityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityLog.
     */
    data: XOR<AvailabilityLogUpdateInput, AvailabilityLogUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityLog to update.
     */
    where: AvailabilityLogWhereUniqueInput
  }

  /**
   * AvailabilityLog updateMany
   */
  export type AvailabilityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityLogs.
     */
    data: XOR<AvailabilityLogUpdateManyMutationInput, AvailabilityLogUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityLogs to update
     */
    where?: AvailabilityLogWhereInput
    /**
     * Limit how many AvailabilityLogs to update.
     */
    limit?: number
  }

  /**
   * AvailabilityLog updateManyAndReturn
   */
  export type AvailabilityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilityLogs.
     */
    data: XOR<AvailabilityLogUpdateManyMutationInput, AvailabilityLogUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityLogs to update
     */
    where?: AvailabilityLogWhereInput
    /**
     * Limit how many AvailabilityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityLog upsert
   */
  export type AvailabilityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityLog to update in case it exists.
     */
    where: AvailabilityLogWhereUniqueInput
    /**
     * In case the AvailabilityLog found by the `where` argument doesn't exist, create a new AvailabilityLog with this data.
     */
    create: XOR<AvailabilityLogCreateInput, AvailabilityLogUncheckedCreateInput>
    /**
     * In case the AvailabilityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityLogUpdateInput, AvailabilityLogUncheckedUpdateInput>
  }

  /**
   * AvailabilityLog delete
   */
  export type AvailabilityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityLog to delete.
     */
    where: AvailabilityLogWhereUniqueInput
  }

  /**
   * AvailabilityLog deleteMany
   */
  export type AvailabilityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityLogs to delete
     */
    where?: AvailabilityLogWhereInput
    /**
     * Limit how many AvailabilityLogs to delete.
     */
    limit?: number
  }

  /**
   * AvailabilityLog without action
   */
  export type AvailabilityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityLog
     */
    select?: AvailabilityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityLog
     */
    omit?: AvailabilityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityLogInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    booking_id: number | null
    lot_id: number | null
    user_id: number | null
    space_id: number | null
  }

  export type BookingSumAggregateOutputType = {
    booking_id: number | null
    lot_id: number | null
    user_id: number | null
    space_id: number | null
  }

  export type BookingMinAggregateOutputType = {
    booking_id: number | null
    lot_id: number | null
    user_id: number | null
    space_id: number | null
    start_time: Date | null
    end_time: Date | null
    status: $Enums.BookStatus | null
  }

  export type BookingMaxAggregateOutputType = {
    booking_id: number | null
    lot_id: number | null
    user_id: number | null
    space_id: number | null
    start_time: Date | null
    end_time: Date | null
    status: $Enums.BookStatus | null
  }

  export type BookingCountAggregateOutputType = {
    booking_id: number
    lot_id: number
    user_id: number
    space_id: number
    start_time: number
    end_time: number
    status: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    booking_id?: true
    lot_id?: true
    user_id?: true
    space_id?: true
  }

  export type BookingSumAggregateInputType = {
    booking_id?: true
    lot_id?: true
    user_id?: true
    space_id?: true
  }

  export type BookingMinAggregateInputType = {
    booking_id?: true
    lot_id?: true
    user_id?: true
    space_id?: true
    start_time?: true
    end_time?: true
    status?: true
  }

  export type BookingMaxAggregateInputType = {
    booking_id?: true
    lot_id?: true
    user_id?: true
    space_id?: true
    start_time?: true
    end_time?: true
    status?: true
  }

  export type BookingCountAggregateInputType = {
    booking_id?: true
    lot_id?: true
    user_id?: true
    space_id?: true
    start_time?: true
    end_time?: true
    status?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    booking_id: number
    lot_id: number
    user_id: number
    space_id: number
    start_time: Date
    end_time: Date
    status: $Enums.BookStatus
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    lot_id?: boolean
    user_id?: boolean
    space_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    lot_id?: boolean
    user_id?: boolean
    space_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    lot_id?: boolean
    user_id?: boolean
    space_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    booking_id?: boolean
    lot_id?: boolean
    user_id?: boolean
    space_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booking_id" | "lot_id" | "user_id" | "space_id" | "start_time" | "end_time" | "status", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      space: Prisma.$ParkingSpacePayload<ExtArgs>
      lot: Prisma.$ParkingLotPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_id: number
      lot_id: number
      user_id: number
      space_id: number
      start_time: Date
      end_time: Date
      status: $Enums.BookStatus
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `booking_id`
     * const bookingWithBooking_idOnly = await prisma.booking.findMany({ select: { booking_id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `booking_id`
     * const bookingWithBooking_idOnly = await prisma.booking.createManyAndReturn({
     *   select: { booking_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `booking_id`
     * const bookingWithBooking_idOnly = await prisma.booking.updateManyAndReturn({
     *   select: { booking_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    space<T extends ParkingSpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpaceDefaultArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly booking_id: FieldRef<"Booking", 'Int'>
    readonly lot_id: FieldRef<"Booking", 'Int'>
    readonly user_id: FieldRef<"Booking", 'Int'>
    readonly space_id: FieldRef<"Booking", 'Int'>
    readonly start_time: FieldRef<"Booking", 'DateTime'>
    readonly end_time: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookStatus'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    user_id: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    user_id: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    user_id: number | null
    amount: number | null
    payment_method: string | null
    payment_date: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    user_id: number | null
    amount: number | null
    payment_method: string | null
    payment_date: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    booking_id: number
    user_id: number
    amount: number
    payment_method: number
    payment_date: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    booking_id?: true
    user_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    booking_id?: true
    user_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    booking_id?: true
    user_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    booking_id?: true
    user_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    booking_id?: true
    user_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    booking_id: number
    user_id: number
    amount: number
    payment_method: string
    payment_date: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    booking_id?: boolean
    user_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    booking_id?: boolean
    user_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    booking_id?: boolean
    user_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    payment_id?: boolean
    booking_id?: boolean
    user_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "booking_id" | "user_id" | "amount" | "payment_method" | "payment_date", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      booking_id: number
      user_id: number
      amount: number
      payment_method: string
      payment_date: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly payment_id: FieldRef<"Payment", 'Int'>
    readonly booking_id: FieldRef<"Payment", 'Int'>
    readonly user_id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly payment_method: FieldRef<"Payment", 'String'>
    readonly payment_date: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    price_id: number | null
    lot_id: number | null
    price_per_hour: number | null
  }

  export type PriceSumAggregateOutputType = {
    price_id: number | null
    lot_id: number | null
    price_per_hour: number | null
  }

  export type PriceMinAggregateOutputType = {
    price_id: number | null
    lot_id: number | null
    price_per_hour: number | null
    effective_date: Date | null
  }

  export type PriceMaxAggregateOutputType = {
    price_id: number | null
    lot_id: number | null
    price_per_hour: number | null
    effective_date: Date | null
  }

  export type PriceCountAggregateOutputType = {
    price_id: number
    lot_id: number
    price_per_hour: number
    effective_date: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    price_id?: true
    lot_id?: true
    price_per_hour?: true
  }

  export type PriceSumAggregateInputType = {
    price_id?: true
    lot_id?: true
    price_per_hour?: true
  }

  export type PriceMinAggregateInputType = {
    price_id?: true
    lot_id?: true
    price_per_hour?: true
    effective_date?: true
  }

  export type PriceMaxAggregateInputType = {
    price_id?: true
    lot_id?: true
    price_per_hour?: true
    effective_date?: true
  }

  export type PriceCountAggregateInputType = {
    price_id?: true
    lot_id?: true
    price_per_hour?: true
    effective_date?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    price_id: number
    lot_id: number
    price_per_hour: number
    effective_date: Date
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    lot_id?: boolean
    price_per_hour?: boolean
    effective_date?: boolean
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    lot_id?: boolean
    price_per_hour?: boolean
    effective_date?: boolean
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    lot_id?: boolean
    price_per_hour?: boolean
    effective_date?: boolean
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    price_id?: boolean
    lot_id?: boolean
    price_per_hour?: boolean
    effective_date?: boolean
  }

  export type PriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"price_id" | "lot_id" | "price_per_hour" | "effective_date", ExtArgs["result"]["price"]>
  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type PriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      lot: Prisma.$ParkingLotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      price_id: number
      lot_id: number
      price_per_hour: number
      effective_date: Date
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `price_id`
     * const priceWithPrice_idOnly = await prisma.price.findMany({ select: { price_id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `price_id`
     * const priceWithPrice_idOnly = await prisma.price.createManyAndReturn({
     *   select: { price_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices and returns the data updated in the database.
     * @param {PriceUpdateManyAndReturnArgs} args - Arguments to update many Prices.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prices and only return the `price_id`
     * const priceWithPrice_idOnly = await prisma.price.updateManyAndReturn({
     *   select: { price_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Price model
   */
  interface PriceFieldRefs {
    readonly price_id: FieldRef<"Price", 'Int'>
    readonly lot_id: FieldRef<"Price", 'Int'>
    readonly price_per_hour: FieldRef<"Price", 'Float'>
    readonly effective_date: FieldRef<"Price", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
  }

  /**
   * Price updateManyAndReturn
   */
  export type PriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to delete.
     */
    limit?: number
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    lot_id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    lot_id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    lot_id: number | null
    rating: number | null
    comment: string | null
    review_date: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    lot_id: number | null
    rating: number | null
    comment: string | null
    review_date: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    user_id: number
    lot_id: number
    rating: number
    comment: number
    review_date: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    user_id?: true
    lot_id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    user_id?: true
    lot_id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    user_id?: true
    lot_id?: true
    rating?: true
    comment?: true
    review_date?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    user_id?: true
    lot_id?: true
    rating?: true
    comment?: true
    review_date?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    user_id?: true
    lot_id?: true
    rating?: true
    comment?: true
    review_date?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    user_id: number
    lot_id: number
    rating: number
    comment: string
    review_date: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    lot_id?: boolean
    rating?: boolean
    comment?: boolean
    review_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    lot_id?: boolean
    rating?: boolean
    comment?: boolean
    review_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    lot_id?: boolean
    rating?: boolean
    comment?: boolean
    review_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    review_id?: boolean
    user_id?: boolean
    lot_id?: boolean
    rating?: boolean
    comment?: boolean
    review_date?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "user_id" | "lot_id" | "rating" | "comment" | "review_date", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lot: Prisma.$ParkingLotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      user_id: number
      lot_id: number
      rating: number
      comment: string
      review_date: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly review_id: FieldRef<"Review", 'Int'>
    readonly user_id: FieldRef<"Review", 'Int'>
    readonly lot_id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly review_date: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    notification_id: number | null
    owner_id: number | null
    user_id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    notification_id: number | null
    owner_id: number | null
    user_id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    notification_id: number | null
    owner_id: number | null
    user_id: number | null
    message: string | null
    sent_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    notification_id: number | null
    owner_id: number | null
    user_id: number | null
    message: string | null
    sent_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    notification_id: number
    owner_id: number
    user_id: number
    message: number
    sent_at: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    notification_id?: true
    owner_id?: true
    user_id?: true
  }

  export type NotificationSumAggregateInputType = {
    notification_id?: true
    owner_id?: true
    user_id?: true
  }

  export type NotificationMinAggregateInputType = {
    notification_id?: true
    owner_id?: true
    user_id?: true
    message?: true
    sent_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    notification_id?: true
    owner_id?: true
    user_id?: true
    message?: true
    sent_at?: true
  }

  export type NotificationCountAggregateInputType = {
    notification_id?: true
    owner_id?: true
    user_id?: true
    message?: true
    sent_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    notification_id: number
    owner_id: number | null
    user_id: number | null
    message: string
    sent_at: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    owner_id?: boolean
    user_id?: boolean
    message?: boolean
    sent_at?: boolean
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    owner_id?: boolean
    user_id?: boolean
    message?: boolean
    sent_at?: boolean
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    owner_id?: boolean
    user_id?: boolean
    message?: boolean
    sent_at?: boolean
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    notification_id?: boolean
    owner_id?: boolean
    user_id?: boolean
    message?: boolean
    sent_at?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "owner_id" | "user_id" | "message" | "sent_at", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      owner_id: number | null
      user_id: number | null
      message: string
      sent_at: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.createManyAndReturn({
     *   select: { notification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.updateManyAndReturn({
     *   select: { notification_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Notification$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Notification$ownerArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly notification_id: FieldRef<"Notification", 'Int'>
    readonly owner_id: FieldRef<"Notification", 'Int'>
    readonly user_id: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly sent_at: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.owner
   */
  export type Notification$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    where?: OwnerWhereInput
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    OTP: 'OTP',
    isVerified: 'isVerified',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    OTP: 'OTP',
    isVerified: 'isVerified',
    status: 'status',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    owner_id: 'owner_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    OTP: 'OTP',
    isVerified: 'isVerified',
    status: 'status',
    created_at: 'created_at'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const CityScalarFieldEnum: {
    city_id: 'city_id',
    city_name: 'city_name',
    state: 'state',
    created_at: 'created_at'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const SubCityScalarFieldEnum: {
    sub_city_id: 'sub_city_id',
    city_id: 'city_id',
    sub_city_name: 'sub_city_name',
    created_at: 'created_at'
  };

  export type SubCityScalarFieldEnum = (typeof SubCityScalarFieldEnum)[keyof typeof SubCityScalarFieldEnum]


  export const StreetAddressScalarFieldEnum: {
    street_address_id: 'street_address_id',
    sub_city_id: 'sub_city_id',
    street_address: 'street_address',
    zip_code: 'zip_code',
    created_at: 'created_at'
  };

  export type StreetAddressScalarFieldEnum = (typeof StreetAddressScalarFieldEnum)[keyof typeof StreetAddressScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    location_id: 'location_id',
    lot_id: 'lot_id',
    street_address_id: 'street_address_id',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const ParkingLotScalarFieldEnum: {
    lot_id: 'lot_id',
    owner_id: 'owner_id',
    lot_name: 'lot_name',
    image: 'image',
    capacity: 'capacity',
    created_at: 'created_at'
  };

  export type ParkingLotScalarFieldEnum = (typeof ParkingLotScalarFieldEnum)[keyof typeof ParkingLotScalarFieldEnum]


  export const ParkingSpaceScalarFieldEnum: {
    space_id: 'space_id',
    lot_id: 'lot_id',
    space_number: 'space_number',
    is_handicap: 'is_handicap',
    status: 'status',
    created_at: 'created_at'
  };

  export type ParkingSpaceScalarFieldEnum = (typeof ParkingSpaceScalarFieldEnum)[keyof typeof ParkingSpaceScalarFieldEnum]


  export const AvailabilityLogScalarFieldEnum: {
    log_id: 'log_id',
    space_id: 'space_id',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type AvailabilityLogScalarFieldEnum = (typeof AvailabilityLogScalarFieldEnum)[keyof typeof AvailabilityLogScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    booking_id: 'booking_id',
    lot_id: 'lot_id',
    user_id: 'user_id',
    space_id: 'space_id',
    start_time: 'start_time',
    end_time: 'end_time',
    status: 'status'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    booking_id: 'booking_id',
    user_id: 'user_id',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_date: 'payment_date'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    price_id: 'price_id',
    lot_id: 'lot_id',
    price_per_hour: 'price_per_hour',
    effective_date: 'effective_date'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    user_id: 'user_id',
    lot_id: 'lot_id',
    rating: 'rating',
    comment: 'comment',
    review_date: 'review_date'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    notification_id: 'notification_id',
    owner_id: 'owner_id',
    user_id: 'user_id',
    message: 'message',
    sent_at: 'sent_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminStatus'
   */
  export type EnumAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminStatus'>
    


  /**
   * Reference to a field of type 'AdminStatus[]'
   */
  export type ListEnumAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SpaceStatus'
   */
  export type EnumSpaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpaceStatus'>
    


  /**
   * Reference to a field of type 'SpaceStatus[]'
   */
  export type ListEnumSpaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpaceStatus[]'>
    


  /**
   * Reference to a field of type 'BookStatus'
   */
  export type EnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus'>
    


  /**
   * Reference to a field of type 'BookStatus[]'
   */
  export type ListEnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    first_name?: StringFilter<"Admin"> | string
    last_name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    phone?: StringFilter<"Admin"> | string
    OTP?: IntFilter<"Admin"> | number
    isVerified?: BoolFilter<"Admin"> | boolean
    status?: EnumAdminStatusFilter<"Admin"> | $Enums.AdminStatus
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    first_name?: StringFilter<"Admin"> | string
    last_name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    phone?: StringFilter<"Admin"> | string
    OTP?: IntFilter<"Admin"> | number
    isVerified?: BoolFilter<"Admin"> | boolean
    status?: EnumAdminStatusFilter<"Admin"> | $Enums.AdminStatus
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    first_name?: StringWithAggregatesFilter<"Admin"> | string
    last_name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    phone?: StringWithAggregatesFilter<"Admin"> | string
    OTP?: IntWithAggregatesFilter<"Admin"> | number
    isVerified?: BoolWithAggregatesFilter<"Admin"> | boolean
    status?: EnumAdminStatusWithAggregatesFilter<"Admin"> | $Enums.AdminStatus
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    OTP?: IntFilter<"User"> | number
    isVerified?: BoolFilter<"User"> | boolean
    status?: EnumAdminStatusFilter<"User"> | $Enums.AdminStatus
    created_at?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    payments?: PaymentListRelationFilter
    reviews?: ReviewListRelationFilter
    notification?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    notification?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    OTP?: IntFilter<"User"> | number
    isVerified?: BoolFilter<"User"> | boolean
    status?: EnumAdminStatusFilter<"User"> | $Enums.AdminStatus
    created_at?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    payments?: PaymentListRelationFilter
    reviews?: ReviewListRelationFilter
    notification?: NotificationListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    OTP?: IntWithAggregatesFilter<"User"> | number
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    status?: EnumAdminStatusWithAggregatesFilter<"User"> | $Enums.AdminStatus
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    owner_id?: IntFilter<"Owner"> | number
    first_name?: StringFilter<"Owner"> | string
    last_name?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    phone?: StringFilter<"Owner"> | string
    OTP?: IntFilter<"Owner"> | number
    isVerified?: BoolFilter<"Owner"> | boolean
    status?: EnumAdminStatusFilter<"Owner"> | $Enums.AdminStatus
    created_at?: DateTimeFilter<"Owner"> | Date | string
    parkingLots?: ParkingLotListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    owner_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    parkingLots?: ParkingLotOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    owner_id?: number
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    first_name?: StringFilter<"Owner"> | string
    last_name?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    phone?: StringFilter<"Owner"> | string
    OTP?: IntFilter<"Owner"> | number
    isVerified?: BoolFilter<"Owner"> | boolean
    status?: EnumAdminStatusFilter<"Owner"> | $Enums.AdminStatus
    created_at?: DateTimeFilter<"Owner"> | Date | string
    parkingLots?: ParkingLotListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "owner_id" | "email">

  export type OwnerOrderByWithAggregationInput = {
    owner_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    owner_id?: IntWithAggregatesFilter<"Owner"> | number
    first_name?: StringWithAggregatesFilter<"Owner"> | string
    last_name?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    password?: StringWithAggregatesFilter<"Owner"> | string
    phone?: StringWithAggregatesFilter<"Owner"> | string
    OTP?: IntWithAggregatesFilter<"Owner"> | number
    isVerified?: BoolWithAggregatesFilter<"Owner"> | boolean
    status?: EnumAdminStatusWithAggregatesFilter<"Owner"> | $Enums.AdminStatus
    created_at?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    city_id?: IntFilter<"City"> | number
    city_name?: StringFilter<"City"> | string
    state?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
    subCities?: SubCityListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    city_id?: SortOrder
    city_name?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
    subCities?: SubCityOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    city_id?: number
    city_name_state?: CityCity_nameStateCompoundUniqueInput
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    city_name?: StringFilter<"City"> | string
    state?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
    subCities?: SubCityListRelationFilter
  }, "city_id" | "city_name_state">

  export type CityOrderByWithAggregationInput = {
    city_id?: SortOrder
    city_name?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    city_id?: IntWithAggregatesFilter<"City"> | number
    city_name?: StringWithAggregatesFilter<"City"> | string
    state?: StringWithAggregatesFilter<"City"> | string
    created_at?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type SubCityWhereInput = {
    AND?: SubCityWhereInput | SubCityWhereInput[]
    OR?: SubCityWhereInput[]
    NOT?: SubCityWhereInput | SubCityWhereInput[]
    sub_city_id?: IntFilter<"SubCity"> | number
    city_id?: IntFilter<"SubCity"> | number
    sub_city_name?: StringFilter<"SubCity"> | string
    created_at?: DateTimeFilter<"SubCity"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    addresses?: StreetAddressListRelationFilter
  }

  export type SubCityOrderByWithRelationInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
    sub_city_name?: SortOrder
    created_at?: SortOrder
    city?: CityOrderByWithRelationInput
    addresses?: StreetAddressOrderByRelationAggregateInput
  }

  export type SubCityWhereUniqueInput = Prisma.AtLeast<{
    sub_city_id?: number
    city_id_sub_city_name?: SubCityCity_idSub_city_nameCompoundUniqueInput
    AND?: SubCityWhereInput | SubCityWhereInput[]
    OR?: SubCityWhereInput[]
    NOT?: SubCityWhereInput | SubCityWhereInput[]
    city_id?: IntFilter<"SubCity"> | number
    sub_city_name?: StringFilter<"SubCity"> | string
    created_at?: DateTimeFilter<"SubCity"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    addresses?: StreetAddressListRelationFilter
  }, "sub_city_id" | "city_id_sub_city_name">

  export type SubCityOrderByWithAggregationInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
    sub_city_name?: SortOrder
    created_at?: SortOrder
    _count?: SubCityCountOrderByAggregateInput
    _avg?: SubCityAvgOrderByAggregateInput
    _max?: SubCityMaxOrderByAggregateInput
    _min?: SubCityMinOrderByAggregateInput
    _sum?: SubCitySumOrderByAggregateInput
  }

  export type SubCityScalarWhereWithAggregatesInput = {
    AND?: SubCityScalarWhereWithAggregatesInput | SubCityScalarWhereWithAggregatesInput[]
    OR?: SubCityScalarWhereWithAggregatesInput[]
    NOT?: SubCityScalarWhereWithAggregatesInput | SubCityScalarWhereWithAggregatesInput[]
    sub_city_id?: IntWithAggregatesFilter<"SubCity"> | number
    city_id?: IntWithAggregatesFilter<"SubCity"> | number
    sub_city_name?: StringWithAggregatesFilter<"SubCity"> | string
    created_at?: DateTimeWithAggregatesFilter<"SubCity"> | Date | string
  }

  export type StreetAddressWhereInput = {
    AND?: StreetAddressWhereInput | StreetAddressWhereInput[]
    OR?: StreetAddressWhereInput[]
    NOT?: StreetAddressWhereInput | StreetAddressWhereInput[]
    street_address_id?: IntFilter<"StreetAddress"> | number
    sub_city_id?: IntFilter<"StreetAddress"> | number
    street_address?: StringFilter<"StreetAddress"> | string
    zip_code?: StringFilter<"StreetAddress"> | string
    created_at?: DateTimeFilter<"StreetAddress"> | Date | string
    subCity?: XOR<SubCityScalarRelationFilter, SubCityWhereInput>
    locations?: LocationListRelationFilter
  }

  export type StreetAddressOrderByWithRelationInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
    street_address?: SortOrder
    zip_code?: SortOrder
    created_at?: SortOrder
    subCity?: SubCityOrderByWithRelationInput
    locations?: LocationOrderByRelationAggregateInput
  }

  export type StreetAddressWhereUniqueInput = Prisma.AtLeast<{
    street_address_id?: number
    sub_city_id_street_address_zip_code?: StreetAddressSub_city_idStreet_addressZip_codeCompoundUniqueInput
    AND?: StreetAddressWhereInput | StreetAddressWhereInput[]
    OR?: StreetAddressWhereInput[]
    NOT?: StreetAddressWhereInput | StreetAddressWhereInput[]
    sub_city_id?: IntFilter<"StreetAddress"> | number
    street_address?: StringFilter<"StreetAddress"> | string
    zip_code?: StringFilter<"StreetAddress"> | string
    created_at?: DateTimeFilter<"StreetAddress"> | Date | string
    subCity?: XOR<SubCityScalarRelationFilter, SubCityWhereInput>
    locations?: LocationListRelationFilter
  }, "street_address_id" | "sub_city_id_street_address_zip_code">

  export type StreetAddressOrderByWithAggregationInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
    street_address?: SortOrder
    zip_code?: SortOrder
    created_at?: SortOrder
    _count?: StreetAddressCountOrderByAggregateInput
    _avg?: StreetAddressAvgOrderByAggregateInput
    _max?: StreetAddressMaxOrderByAggregateInput
    _min?: StreetAddressMinOrderByAggregateInput
    _sum?: StreetAddressSumOrderByAggregateInput
  }

  export type StreetAddressScalarWhereWithAggregatesInput = {
    AND?: StreetAddressScalarWhereWithAggregatesInput | StreetAddressScalarWhereWithAggregatesInput[]
    OR?: StreetAddressScalarWhereWithAggregatesInput[]
    NOT?: StreetAddressScalarWhereWithAggregatesInput | StreetAddressScalarWhereWithAggregatesInput[]
    street_address_id?: IntWithAggregatesFilter<"StreetAddress"> | number
    sub_city_id?: IntWithAggregatesFilter<"StreetAddress"> | number
    street_address?: StringWithAggregatesFilter<"StreetAddress"> | string
    zip_code?: StringWithAggregatesFilter<"StreetAddress"> | string
    created_at?: DateTimeWithAggregatesFilter<"StreetAddress"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    location_id?: IntFilter<"Location"> | number
    lot_id?: IntFilter<"Location"> | number
    street_address_id?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    created_at?: DateTimeFilter<"Location"> | Date | string
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    streetAddress?: XOR<StreetAddressScalarRelationFilter, StreetAddressWhereInput>
  }

  export type LocationOrderByWithRelationInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    parkingLot?: ParkingLotOrderByWithRelationInput
    streetAddress?: StreetAddressOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    location_id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    lot_id?: IntFilter<"Location"> | number
    street_address_id?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    created_at?: DateTimeFilter<"Location"> | Date | string
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    streetAddress?: XOR<StreetAddressScalarRelationFilter, StreetAddressWhereInput>
  }, "location_id">

  export type LocationOrderByWithAggregationInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    location_id?: IntWithAggregatesFilter<"Location"> | number
    lot_id?: IntWithAggregatesFilter<"Location"> | number
    street_address_id?: IntWithAggregatesFilter<"Location"> | number
    latitude?: FloatWithAggregatesFilter<"Location"> | number
    longitude?: FloatWithAggregatesFilter<"Location"> | number
    created_at?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type ParkingLotWhereInput = {
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    lot_id?: IntFilter<"ParkingLot"> | number
    owner_id?: IntFilter<"ParkingLot"> | number
    lot_name?: StringFilter<"ParkingLot"> | string
    image?: StringNullableFilter<"ParkingLot"> | string | null
    capacity?: IntFilter<"ParkingLot"> | number
    created_at?: DateTimeFilter<"ParkingLot"> | Date | string
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    spaces?: ParkingSpaceListRelationFilter
    locations?: LocationListRelationFilter
    prices?: PriceListRelationFilter
    reviews?: ReviewListRelationFilter
    booking?: BookingListRelationFilter
  }

  export type ParkingLotOrderByWithRelationInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    lot_name?: SortOrder
    image?: SortOrderInput | SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    owner?: OwnerOrderByWithRelationInput
    spaces?: ParkingSpaceOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    prices?: PriceOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    booking?: BookingOrderByRelationAggregateInput
  }

  export type ParkingLotWhereUniqueInput = Prisma.AtLeast<{
    lot_id?: number
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    owner_id?: IntFilter<"ParkingLot"> | number
    lot_name?: StringFilter<"ParkingLot"> | string
    image?: StringNullableFilter<"ParkingLot"> | string | null
    capacity?: IntFilter<"ParkingLot"> | number
    created_at?: DateTimeFilter<"ParkingLot"> | Date | string
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    spaces?: ParkingSpaceListRelationFilter
    locations?: LocationListRelationFilter
    prices?: PriceListRelationFilter
    reviews?: ReviewListRelationFilter
    booking?: BookingListRelationFilter
  }, "lot_id">

  export type ParkingLotOrderByWithAggregationInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    lot_name?: SortOrder
    image?: SortOrderInput | SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    _count?: ParkingLotCountOrderByAggregateInput
    _avg?: ParkingLotAvgOrderByAggregateInput
    _max?: ParkingLotMaxOrderByAggregateInput
    _min?: ParkingLotMinOrderByAggregateInput
    _sum?: ParkingLotSumOrderByAggregateInput
  }

  export type ParkingLotScalarWhereWithAggregatesInput = {
    AND?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    OR?: ParkingLotScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    lot_id?: IntWithAggregatesFilter<"ParkingLot"> | number
    owner_id?: IntWithAggregatesFilter<"ParkingLot"> | number
    lot_name?: StringWithAggregatesFilter<"ParkingLot"> | string
    image?: StringNullableWithAggregatesFilter<"ParkingLot"> | string | null
    capacity?: IntWithAggregatesFilter<"ParkingLot"> | number
    created_at?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
  }

  export type ParkingSpaceWhereInput = {
    AND?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    OR?: ParkingSpaceWhereInput[]
    NOT?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    space_id?: IntFilter<"ParkingSpace"> | number
    lot_id?: IntFilter<"ParkingSpace"> | number
    space_number?: StringFilter<"ParkingSpace"> | string
    is_handicap?: BoolFilter<"ParkingSpace"> | boolean
    status?: EnumSpaceStatusFilter<"ParkingSpace"> | $Enums.SpaceStatus
    created_at?: DateTimeFilter<"ParkingSpace"> | Date | string
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    availability?: AvailabilityLogListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ParkingSpaceOrderByWithRelationInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
    space_number?: SortOrder
    is_handicap?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    lot?: ParkingLotOrderByWithRelationInput
    availability?: AvailabilityLogOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ParkingSpaceWhereUniqueInput = Prisma.AtLeast<{
    space_id?: number
    AND?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    OR?: ParkingSpaceWhereInput[]
    NOT?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    lot_id?: IntFilter<"ParkingSpace"> | number
    space_number?: StringFilter<"ParkingSpace"> | string
    is_handicap?: BoolFilter<"ParkingSpace"> | boolean
    status?: EnumSpaceStatusFilter<"ParkingSpace"> | $Enums.SpaceStatus
    created_at?: DateTimeFilter<"ParkingSpace"> | Date | string
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    availability?: AvailabilityLogListRelationFilter
    bookings?: BookingListRelationFilter
  }, "space_id">

  export type ParkingSpaceOrderByWithAggregationInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
    space_number?: SortOrder
    is_handicap?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: ParkingSpaceCountOrderByAggregateInput
    _avg?: ParkingSpaceAvgOrderByAggregateInput
    _max?: ParkingSpaceMaxOrderByAggregateInput
    _min?: ParkingSpaceMinOrderByAggregateInput
    _sum?: ParkingSpaceSumOrderByAggregateInput
  }

  export type ParkingSpaceScalarWhereWithAggregatesInput = {
    AND?: ParkingSpaceScalarWhereWithAggregatesInput | ParkingSpaceScalarWhereWithAggregatesInput[]
    OR?: ParkingSpaceScalarWhereWithAggregatesInput[]
    NOT?: ParkingSpaceScalarWhereWithAggregatesInput | ParkingSpaceScalarWhereWithAggregatesInput[]
    space_id?: IntWithAggregatesFilter<"ParkingSpace"> | number
    lot_id?: IntWithAggregatesFilter<"ParkingSpace"> | number
    space_number?: StringWithAggregatesFilter<"ParkingSpace"> | string
    is_handicap?: BoolWithAggregatesFilter<"ParkingSpace"> | boolean
    status?: EnumSpaceStatusWithAggregatesFilter<"ParkingSpace"> | $Enums.SpaceStatus
    created_at?: DateTimeWithAggregatesFilter<"ParkingSpace"> | Date | string
  }

  export type AvailabilityLogWhereInput = {
    AND?: AvailabilityLogWhereInput | AvailabilityLogWhereInput[]
    OR?: AvailabilityLogWhereInput[]
    NOT?: AvailabilityLogWhereInput | AvailabilityLogWhereInput[]
    log_id?: IntFilter<"AvailabilityLog"> | number
    space_id?: IntFilter<"AvailabilityLog"> | number
    status?: StringFilter<"AvailabilityLog"> | string
    timestamp?: DateTimeFilter<"AvailabilityLog"> | Date | string
    space?: XOR<ParkingSpaceScalarRelationFilter, ParkingSpaceWhereInput>
  }

  export type AvailabilityLogOrderByWithRelationInput = {
    log_id?: SortOrder
    space_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    space?: ParkingSpaceOrderByWithRelationInput
  }

  export type AvailabilityLogWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: AvailabilityLogWhereInput | AvailabilityLogWhereInput[]
    OR?: AvailabilityLogWhereInput[]
    NOT?: AvailabilityLogWhereInput | AvailabilityLogWhereInput[]
    space_id?: IntFilter<"AvailabilityLog"> | number
    status?: StringFilter<"AvailabilityLog"> | string
    timestamp?: DateTimeFilter<"AvailabilityLog"> | Date | string
    space?: XOR<ParkingSpaceScalarRelationFilter, ParkingSpaceWhereInput>
  }, "log_id">

  export type AvailabilityLogOrderByWithAggregationInput = {
    log_id?: SortOrder
    space_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    _count?: AvailabilityLogCountOrderByAggregateInput
    _avg?: AvailabilityLogAvgOrderByAggregateInput
    _max?: AvailabilityLogMaxOrderByAggregateInput
    _min?: AvailabilityLogMinOrderByAggregateInput
    _sum?: AvailabilityLogSumOrderByAggregateInput
  }

  export type AvailabilityLogScalarWhereWithAggregatesInput = {
    AND?: AvailabilityLogScalarWhereWithAggregatesInput | AvailabilityLogScalarWhereWithAggregatesInput[]
    OR?: AvailabilityLogScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityLogScalarWhereWithAggregatesInput | AvailabilityLogScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"AvailabilityLog"> | number
    space_id?: IntWithAggregatesFilter<"AvailabilityLog"> | number
    status?: StringWithAggregatesFilter<"AvailabilityLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AvailabilityLog"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    booking_id?: IntFilter<"Booking"> | number
    lot_id?: IntFilter<"Booking"> | number
    user_id?: IntFilter<"Booking"> | number
    space_id?: IntFilter<"Booking"> | number
    start_time?: DateTimeFilter<"Booking"> | Date | string
    end_time?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookStatusFilter<"Booking"> | $Enums.BookStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    space?: XOR<ParkingSpaceScalarRelationFilter, ParkingSpaceWhereInput>
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    payment?: PaymentListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    space?: ParkingSpaceOrderByWithRelationInput
    lot?: ParkingLotOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    booking_id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    lot_id?: IntFilter<"Booking"> | number
    user_id?: IntFilter<"Booking"> | number
    space_id?: IntFilter<"Booking"> | number
    start_time?: DateTimeFilter<"Booking"> | Date | string
    end_time?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookStatusFilter<"Booking"> | $Enums.BookStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    space?: XOR<ParkingSpaceScalarRelationFilter, ParkingSpaceWhereInput>
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    payment?: PaymentListRelationFilter
  }, "booking_id">

  export type BookingOrderByWithAggregationInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    booking_id?: IntWithAggregatesFilter<"Booking"> | number
    lot_id?: IntWithAggregatesFilter<"Booking"> | number
    user_id?: IntWithAggregatesFilter<"Booking"> | number
    space_id?: IntWithAggregatesFilter<"Booking"> | number
    start_time?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumBookStatusWithAggregatesFilter<"Booking"> | $Enums.BookStatus
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    booking_id?: IntFilter<"Payment"> | number
    user_id?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    payment_method?: StringFilter<"Payment"> | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    booking?: BookingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    booking_id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    user_id?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    payment_method?: StringFilter<"Payment"> | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "payment_id" | "booking_id">

  export type PaymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"Payment"> | number
    booking_id?: IntWithAggregatesFilter<"Payment"> | number
    user_id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    payment_method?: StringWithAggregatesFilter<"Payment"> | string
    payment_date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    price_id?: IntFilter<"Price"> | number
    lot_id?: IntFilter<"Price"> | number
    price_per_hour?: FloatFilter<"Price"> | number
    effective_date?: DateTimeFilter<"Price"> | Date | string
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
    effective_date?: SortOrder
    lot?: ParkingLotOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    price_id?: number
    lot_id?: number
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    price_per_hour?: FloatFilter<"Price"> | number
    effective_date?: DateTimeFilter<"Price"> | Date | string
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
  }, "price_id" | "lot_id">

  export type PriceOrderByWithAggregationInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
    effective_date?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    price_id?: IntWithAggregatesFilter<"Price"> | number
    lot_id?: IntWithAggregatesFilter<"Price"> | number
    price_per_hour?: FloatWithAggregatesFilter<"Price"> | number
    effective_date?: DateTimeWithAggregatesFilter<"Price"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    review_id?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    lot_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    review_date?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
    user?: UserOrderByWithRelationInput
    lot?: ParkingLotOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    user_id?: IntFilter<"Review"> | number
    lot_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    review_date?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
  }, "review_id">

  export type ReviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"Review"> | number
    user_id?: IntWithAggregatesFilter<"Review"> | number
    lot_id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    review_date?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    notification_id?: IntFilter<"Notification"> | number
    owner_id?: IntNullableFilter<"Notification"> | number | null
    user_id?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    sent_at?: DateTimeFilter<"Notification"> | Date | string
    owner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    notification_id?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    owner?: OwnerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    owner_id?: IntNullableFilter<"Notification"> | number | null
    user_id?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    sent_at?: DateTimeFilter<"Notification"> | Date | string
    owner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "notification_id">

  export type NotificationOrderByWithAggregationInput = {
    notification_id?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"Notification"> | number
    owner_id?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    sent_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AdminCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    owner_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    owner_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
  }

  export type OwnerUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateInput = {
    city_name: string
    state: string
    created_at?: Date | string
    subCities?: SubCityCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    city_id?: number
    city_name: string
    state: string
    created_at?: Date | string
    subCities?: SubCityUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    city_name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subCities?: SubCityUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subCities?: SubCityUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    city_id?: number
    city_name: string
    state: string
    created_at?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    city_name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCityCreateInput = {
    sub_city_name: string
    created_at?: Date | string
    city: CityCreateNestedOneWithoutSubCitiesInput
    addresses?: StreetAddressCreateNestedManyWithoutSubCityInput
  }

  export type SubCityUncheckedCreateInput = {
    sub_city_id?: number
    city_id: number
    sub_city_name: string
    created_at?: Date | string
    addresses?: StreetAddressUncheckedCreateNestedManyWithoutSubCityInput
  }

  export type SubCityUpdateInput = {
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutSubCitiesNestedInput
    addresses?: StreetAddressUpdateManyWithoutSubCityNestedInput
  }

  export type SubCityUncheckedUpdateInput = {
    sub_city_id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: StreetAddressUncheckedUpdateManyWithoutSubCityNestedInput
  }

  export type SubCityCreateManyInput = {
    sub_city_id?: number
    city_id: number
    sub_city_name: string
    created_at?: Date | string
  }

  export type SubCityUpdateManyMutationInput = {
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCityUncheckedUpdateManyInput = {
    sub_city_id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetAddressCreateInput = {
    street_address: string
    zip_code: string
    created_at?: Date | string
    subCity: SubCityCreateNestedOneWithoutAddressesInput
    locations?: LocationCreateNestedManyWithoutStreetAddressInput
  }

  export type StreetAddressUncheckedCreateInput = {
    street_address_id?: number
    sub_city_id: number
    street_address: string
    zip_code: string
    created_at?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutStreetAddressInput
  }

  export type StreetAddressUpdateInput = {
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subCity?: SubCityUpdateOneRequiredWithoutAddressesNestedInput
    locations?: LocationUpdateManyWithoutStreetAddressNestedInput
  }

  export type StreetAddressUncheckedUpdateInput = {
    street_address_id?: IntFieldUpdateOperationsInput | number
    sub_city_id?: IntFieldUpdateOperationsInput | number
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutStreetAddressNestedInput
  }

  export type StreetAddressCreateManyInput = {
    street_address_id?: number
    sub_city_id: number
    street_address: string
    zip_code: string
    created_at?: Date | string
  }

  export type StreetAddressUpdateManyMutationInput = {
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetAddressUncheckedUpdateManyInput = {
    street_address_id?: IntFieldUpdateOperationsInput | number
    sub_city_id?: IntFieldUpdateOperationsInput | number
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    latitude: number
    longitude: number
    created_at?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutLocationsInput
    streetAddress: StreetAddressCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateInput = {
    location_id?: number
    lot_id: number
    street_address_id: number
    latitude: number
    longitude: number
    created_at?: Date | string
  }

  export type LocationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutLocationsNestedInput
    streetAddress?: StreetAddressUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    street_address_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyInput = {
    location_id?: number
    lot_id: number
    street_address_id: number
    latitude: number
    longitude: number
    created_at?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    street_address_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotCreateInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    owner: OwnerCreateNestedOneWithoutParkingLotsInput
    spaces?: ParkingSpaceCreateNestedManyWithoutLotInput
    locations?: LocationCreateNestedManyWithoutParkingLotInput
    prices?: PriceCreateNestedManyWithoutLotInput
    reviews?: ReviewCreateNestedManyWithoutLotInput
    booking?: BookingCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceUncheckedCreateNestedManyWithoutLotInput
    locations?: LocationUncheckedCreateNestedManyWithoutParkingLotInput
    prices?: PriceUncheckedCreateNestedManyWithoutLotInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLotInput
    booking?: BookingUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUpdateInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutParkingLotsNestedInput
    spaces?: ParkingSpaceUpdateManyWithoutLotNestedInput
    locations?: LocationUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUpdateManyWithoutLotNestedInput
    reviews?: ReviewUpdateManyWithoutLotNestedInput
    booking?: BookingUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput
    locations?: LocationUncheckedUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUncheckedUpdateManyWithoutLotNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLotNestedInput
    booking?: BookingUncheckedUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotCreateManyInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
  }

  export type ParkingLotUpdateManyMutationInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotUncheckedUpdateManyInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpaceCreateInput = {
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    lot: ParkingLotCreateNestedOneWithoutSpacesInput
    availability?: AvailabilityLogCreateNestedManyWithoutSpaceInput
    bookings?: BookingCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceUncheckedCreateInput = {
    space_id?: number
    lot_id: number
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    availability?: AvailabilityLogUncheckedCreateNestedManyWithoutSpaceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceUpdateInput = {
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: ParkingLotUpdateOneRequiredWithoutSpacesNestedInput
    availability?: AvailabilityLogUpdateManyWithoutSpaceNestedInput
    bookings?: BookingUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateInput = {
    space_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityLogUncheckedUpdateManyWithoutSpaceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingSpaceCreateManyInput = {
    space_id?: number
    lot_id: number
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
  }

  export type ParkingSpaceUpdateManyMutationInput = {
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpaceUncheckedUpdateManyInput = {
    space_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityLogCreateInput = {
    status: string
    timestamp?: Date | string
    space: ParkingSpaceCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityLogUncheckedCreateInput = {
    log_id?: number
    space_id: number
    status: string
    timestamp?: Date | string
  }

  export type AvailabilityLogUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: ParkingSpaceUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityLogUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityLogCreateManyInput = {
    log_id?: number
    space_id: number
    status: string
    timestamp?: Date | string
  }

  export type AvailabilityLogUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityLogUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    user: UserCreateNestedOneWithoutBookingsInput
    space: ParkingSpaceCreateNestedOneWithoutBookingsInput
    lot: ParkingLotCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    booking_id?: number
    lot_id: number
    user_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    space?: ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput
    lot?: ParkingLotUpdateOneRequiredWithoutBookingNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    booking_id?: number
    lot_id: number
    user_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
  }

  export type BookingUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
  }

  export type BookingUncheckedUpdateManyInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
  }

  export type PaymentCreateInput = {
    amount: number
    payment_method: string
    payment_date?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    payment_id?: number
    booking_id: number
    user_id: number
    amount: number
    payment_method: string
    payment_date?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    payment_id?: number
    booking_id: number
    user_id: number
    amount: number
    payment_method: string
    payment_date?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateInput = {
    price_per_hour: number
    effective_date: Date | string
    lot: ParkingLotCreateNestedOneWithoutPricesInput
  }

  export type PriceUncheckedCreateInput = {
    price_id?: number
    lot_id: number
    price_per_hour: number
    effective_date: Date | string
  }

  export type PriceUpdateInput = {
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: ParkingLotUpdateOneRequiredWithoutPricesNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyInput = {
    price_id?: number
    lot_id: number
    price_per_hour: number
    effective_date: Date | string
  }

  export type PriceUpdateManyMutationInput = {
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment: string
    review_date?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    lot: ParkingLotCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    review_id?: number
    user_id: number
    lot_id: number
    rating: number
    comment: string
    review_date?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    lot?: ParkingLotUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    review_id?: number
    user_id: number
    lot_id: number
    rating: number
    comment: string
    review_date?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    message: string
    sent_at?: Date | string
    owner?: OwnerCreateNestedOneWithoutNotificationsInput
    user?: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    notification_id?: number
    owner_id?: number | null
    user_id?: number | null
    message: string
    sent_at?: Date | string
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneWithoutNotificationsNestedInput
    user?: UserUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    notification_id?: number
    owner_id?: number | null
    user_id?: number | null
    message: string
    sent_at?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusFilter<$PrismaModel> | $Enums.AdminStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    OTP?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    OTP?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumAdminStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    OTP?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    OTP?: SortOrder
  }

  export type ParkingLotListRelationFilter = {
    every?: ParkingLotWhereInput
    some?: ParkingLotWhereInput
    none?: ParkingLotWhereInput
  }

  export type ParkingLotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    owner_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    owner_id?: SortOrder
    OTP?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    owner_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    owner_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    OTP?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    owner_id?: SortOrder
    OTP?: SortOrder
  }

  export type SubCityListRelationFilter = {
    every?: SubCityWhereInput
    some?: SubCityWhereInput
    none?: SubCityWhereInput
  }

  export type SubCityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCity_nameStateCompoundUniqueInput = {
    city_name: string
    state: string
  }

  export type CityCountOrderByAggregateInput = {
    city_id?: SortOrder
    city_name?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    city_id?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    city_id?: SortOrder
    city_name?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    city_id?: SortOrder
    city_name?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    city_id?: SortOrder
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type StreetAddressListRelationFilter = {
    every?: StreetAddressWhereInput
    some?: StreetAddressWhereInput
    none?: StreetAddressWhereInput
  }

  export type StreetAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCityCity_idSub_city_nameCompoundUniqueInput = {
    city_id: number
    sub_city_name: string
  }

  export type SubCityCountOrderByAggregateInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
    sub_city_name?: SortOrder
    created_at?: SortOrder
  }

  export type SubCityAvgOrderByAggregateInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
  }

  export type SubCityMaxOrderByAggregateInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
    sub_city_name?: SortOrder
    created_at?: SortOrder
  }

  export type SubCityMinOrderByAggregateInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
    sub_city_name?: SortOrder
    created_at?: SortOrder
  }

  export type SubCitySumOrderByAggregateInput = {
    sub_city_id?: SortOrder
    city_id?: SortOrder
  }

  export type SubCityScalarRelationFilter = {
    is?: SubCityWhereInput
    isNot?: SubCityWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreetAddressSub_city_idStreet_addressZip_codeCompoundUniqueInput = {
    sub_city_id: number
    street_address: string
    zip_code: string
  }

  export type StreetAddressCountOrderByAggregateInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
    street_address?: SortOrder
    zip_code?: SortOrder
    created_at?: SortOrder
  }

  export type StreetAddressAvgOrderByAggregateInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
  }

  export type StreetAddressMaxOrderByAggregateInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
    street_address?: SortOrder
    zip_code?: SortOrder
    created_at?: SortOrder
  }

  export type StreetAddressMinOrderByAggregateInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
    street_address?: SortOrder
    zip_code?: SortOrder
    created_at?: SortOrder
  }

  export type StreetAddressSumOrderByAggregateInput = {
    street_address_id?: SortOrder
    sub_city_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParkingLotScalarRelationFilter = {
    is?: ParkingLotWhereInput
    isNot?: ParkingLotWhereInput
  }

  export type StreetAddressScalarRelationFilter = {
    is?: StreetAddressWhereInput
    isNot?: StreetAddressWhereInput
  }

  export type LocationCountOrderByAggregateInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    location_id?: SortOrder
    lot_id?: SortOrder
    street_address_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type ParkingSpaceListRelationFilter = {
    every?: ParkingSpaceWhereInput
    some?: ParkingSpaceWhereInput
    none?: ParkingSpaceWhereInput
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParkingSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotCountOrderByAggregateInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    lot_name?: SortOrder
    image?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
  }

  export type ParkingLotAvgOrderByAggregateInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    capacity?: SortOrder
  }

  export type ParkingLotMaxOrderByAggregateInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    lot_name?: SortOrder
    image?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
  }

  export type ParkingLotMinOrderByAggregateInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    lot_name?: SortOrder
    image?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
  }

  export type ParkingLotSumOrderByAggregateInput = {
    lot_id?: SortOrder
    owner_id?: SortOrder
    capacity?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSpaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceStatus | EnumSpaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceStatusFilter<$PrismaModel> | $Enums.SpaceStatus
  }

  export type AvailabilityLogListRelationFilter = {
    every?: AvailabilityLogWhereInput
    some?: AvailabilityLogWhereInput
    none?: AvailabilityLogWhereInput
  }

  export type AvailabilityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingSpaceCountOrderByAggregateInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
    space_number?: SortOrder
    is_handicap?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ParkingSpaceAvgOrderByAggregateInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
  }

  export type ParkingSpaceMaxOrderByAggregateInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
    space_number?: SortOrder
    is_handicap?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ParkingSpaceMinOrderByAggregateInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
    space_number?: SortOrder
    is_handicap?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ParkingSpaceSumOrderByAggregateInput = {
    space_id?: SortOrder
    lot_id?: SortOrder
  }

  export type EnumSpaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceStatus | EnumSpaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.SpaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpaceStatusFilter<$PrismaModel>
    _max?: NestedEnumSpaceStatusFilter<$PrismaModel>
  }

  export type ParkingSpaceScalarRelationFilter = {
    is?: ParkingSpaceWhereInput
    isNot?: ParkingSpaceWhereInput
  }

  export type AvailabilityLogCountOrderByAggregateInput = {
    log_id?: SortOrder
    space_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type AvailabilityLogAvgOrderByAggregateInput = {
    log_id?: SortOrder
    space_id?: SortOrder
  }

  export type AvailabilityLogMaxOrderByAggregateInput = {
    log_id?: SortOrder
    space_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type AvailabilityLogMinOrderByAggregateInput = {
    log_id?: SortOrder
    space_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type AvailabilityLogSumOrderByAggregateInput = {
    log_id?: SortOrder
    space_id?: SortOrder
  }

  export type EnumBookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusFilter<$PrismaModel> | $Enums.BookStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    booking_id?: SortOrder
    lot_id?: SortOrder
    user_id?: SortOrder
    space_id?: SortOrder
  }

  export type EnumBookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookStatusFilter<$PrismaModel>
    _max?: NestedEnumBookStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type PriceCountOrderByAggregateInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
    effective_date?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
    effective_date?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
    effective_date?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    price_id?: SortOrder
    lot_id?: SortOrder
    price_per_hour?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OwnerNullableScalarRelationFilter = {
    is?: OwnerWhereInput | null
    isNot?: OwnerWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    notification_id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    notification_id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    notification_id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAdminStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdminStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParkingLotCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ParkingLotUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ParkingLotUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingLotUpsertWithWhereUniqueWithoutOwnerInput | ParkingLotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    set?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    disconnect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    delete?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    update?: ParkingLotUpdateWithWhereUniqueWithoutOwnerInput | ParkingLotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingLotUpdateManyWithWhereWithoutOwnerInput | ParkingLotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutOwnerInput | NotificationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutOwnerInput | NotificationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutOwnerInput | NotificationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingLotUpsertWithWhereUniqueWithoutOwnerInput | ParkingLotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    set?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    disconnect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    delete?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    update?: ParkingLotUpdateWithWhereUniqueWithoutOwnerInput | ParkingLotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingLotUpdateManyWithWhereWithoutOwnerInput | ParkingLotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutOwnerInput | NotificationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutOwnerInput | NotificationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutOwnerInput | NotificationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SubCityCreateNestedManyWithoutCityInput = {
    create?: XOR<SubCityCreateWithoutCityInput, SubCityUncheckedCreateWithoutCityInput> | SubCityCreateWithoutCityInput[] | SubCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: SubCityCreateOrConnectWithoutCityInput | SubCityCreateOrConnectWithoutCityInput[]
    createMany?: SubCityCreateManyCityInputEnvelope
    connect?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
  }

  export type SubCityUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<SubCityCreateWithoutCityInput, SubCityUncheckedCreateWithoutCityInput> | SubCityCreateWithoutCityInput[] | SubCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: SubCityCreateOrConnectWithoutCityInput | SubCityCreateOrConnectWithoutCityInput[]
    createMany?: SubCityCreateManyCityInputEnvelope
    connect?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
  }

  export type SubCityUpdateManyWithoutCityNestedInput = {
    create?: XOR<SubCityCreateWithoutCityInput, SubCityUncheckedCreateWithoutCityInput> | SubCityCreateWithoutCityInput[] | SubCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: SubCityCreateOrConnectWithoutCityInput | SubCityCreateOrConnectWithoutCityInput[]
    upsert?: SubCityUpsertWithWhereUniqueWithoutCityInput | SubCityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: SubCityCreateManyCityInputEnvelope
    set?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    disconnect?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    delete?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    connect?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    update?: SubCityUpdateWithWhereUniqueWithoutCityInput | SubCityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: SubCityUpdateManyWithWhereWithoutCityInput | SubCityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: SubCityScalarWhereInput | SubCityScalarWhereInput[]
  }

  export type SubCityUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<SubCityCreateWithoutCityInput, SubCityUncheckedCreateWithoutCityInput> | SubCityCreateWithoutCityInput[] | SubCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: SubCityCreateOrConnectWithoutCityInput | SubCityCreateOrConnectWithoutCityInput[]
    upsert?: SubCityUpsertWithWhereUniqueWithoutCityInput | SubCityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: SubCityCreateManyCityInputEnvelope
    set?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    disconnect?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    delete?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    connect?: SubCityWhereUniqueInput | SubCityWhereUniqueInput[]
    update?: SubCityUpdateWithWhereUniqueWithoutCityInput | SubCityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: SubCityUpdateManyWithWhereWithoutCityInput | SubCityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: SubCityScalarWhereInput | SubCityScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutSubCitiesInput = {
    create?: XOR<CityCreateWithoutSubCitiesInput, CityUncheckedCreateWithoutSubCitiesInput>
    connectOrCreate?: CityCreateOrConnectWithoutSubCitiesInput
    connect?: CityWhereUniqueInput
  }

  export type StreetAddressCreateNestedManyWithoutSubCityInput = {
    create?: XOR<StreetAddressCreateWithoutSubCityInput, StreetAddressUncheckedCreateWithoutSubCityInput> | StreetAddressCreateWithoutSubCityInput[] | StreetAddressUncheckedCreateWithoutSubCityInput[]
    connectOrCreate?: StreetAddressCreateOrConnectWithoutSubCityInput | StreetAddressCreateOrConnectWithoutSubCityInput[]
    createMany?: StreetAddressCreateManySubCityInputEnvelope
    connect?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
  }

  export type StreetAddressUncheckedCreateNestedManyWithoutSubCityInput = {
    create?: XOR<StreetAddressCreateWithoutSubCityInput, StreetAddressUncheckedCreateWithoutSubCityInput> | StreetAddressCreateWithoutSubCityInput[] | StreetAddressUncheckedCreateWithoutSubCityInput[]
    connectOrCreate?: StreetAddressCreateOrConnectWithoutSubCityInput | StreetAddressCreateOrConnectWithoutSubCityInput[]
    createMany?: StreetAddressCreateManySubCityInputEnvelope
    connect?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutSubCitiesNestedInput = {
    create?: XOR<CityCreateWithoutSubCitiesInput, CityUncheckedCreateWithoutSubCitiesInput>
    connectOrCreate?: CityCreateOrConnectWithoutSubCitiesInput
    upsert?: CityUpsertWithoutSubCitiesInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutSubCitiesInput, CityUpdateWithoutSubCitiesInput>, CityUncheckedUpdateWithoutSubCitiesInput>
  }

  export type StreetAddressUpdateManyWithoutSubCityNestedInput = {
    create?: XOR<StreetAddressCreateWithoutSubCityInput, StreetAddressUncheckedCreateWithoutSubCityInput> | StreetAddressCreateWithoutSubCityInput[] | StreetAddressUncheckedCreateWithoutSubCityInput[]
    connectOrCreate?: StreetAddressCreateOrConnectWithoutSubCityInput | StreetAddressCreateOrConnectWithoutSubCityInput[]
    upsert?: StreetAddressUpsertWithWhereUniqueWithoutSubCityInput | StreetAddressUpsertWithWhereUniqueWithoutSubCityInput[]
    createMany?: StreetAddressCreateManySubCityInputEnvelope
    set?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    disconnect?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    delete?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    connect?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    update?: StreetAddressUpdateWithWhereUniqueWithoutSubCityInput | StreetAddressUpdateWithWhereUniqueWithoutSubCityInput[]
    updateMany?: StreetAddressUpdateManyWithWhereWithoutSubCityInput | StreetAddressUpdateManyWithWhereWithoutSubCityInput[]
    deleteMany?: StreetAddressScalarWhereInput | StreetAddressScalarWhereInput[]
  }

  export type StreetAddressUncheckedUpdateManyWithoutSubCityNestedInput = {
    create?: XOR<StreetAddressCreateWithoutSubCityInput, StreetAddressUncheckedCreateWithoutSubCityInput> | StreetAddressCreateWithoutSubCityInput[] | StreetAddressUncheckedCreateWithoutSubCityInput[]
    connectOrCreate?: StreetAddressCreateOrConnectWithoutSubCityInput | StreetAddressCreateOrConnectWithoutSubCityInput[]
    upsert?: StreetAddressUpsertWithWhereUniqueWithoutSubCityInput | StreetAddressUpsertWithWhereUniqueWithoutSubCityInput[]
    createMany?: StreetAddressCreateManySubCityInputEnvelope
    set?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    disconnect?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    delete?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    connect?: StreetAddressWhereUniqueInput | StreetAddressWhereUniqueInput[]
    update?: StreetAddressUpdateWithWhereUniqueWithoutSubCityInput | StreetAddressUpdateWithWhereUniqueWithoutSubCityInput[]
    updateMany?: StreetAddressUpdateManyWithWhereWithoutSubCityInput | StreetAddressUpdateManyWithWhereWithoutSubCityInput[]
    deleteMany?: StreetAddressScalarWhereInput | StreetAddressScalarWhereInput[]
  }

  export type SubCityCreateNestedOneWithoutAddressesInput = {
    create?: XOR<SubCityCreateWithoutAddressesInput, SubCityUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: SubCityCreateOrConnectWithoutAddressesInput
    connect?: SubCityWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutStreetAddressInput = {
    create?: XOR<LocationCreateWithoutStreetAddressInput, LocationUncheckedCreateWithoutStreetAddressInput> | LocationCreateWithoutStreetAddressInput[] | LocationUncheckedCreateWithoutStreetAddressInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutStreetAddressInput | LocationCreateOrConnectWithoutStreetAddressInput[]
    createMany?: LocationCreateManyStreetAddressInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutStreetAddressInput = {
    create?: XOR<LocationCreateWithoutStreetAddressInput, LocationUncheckedCreateWithoutStreetAddressInput> | LocationCreateWithoutStreetAddressInput[] | LocationUncheckedCreateWithoutStreetAddressInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutStreetAddressInput | LocationCreateOrConnectWithoutStreetAddressInput[]
    createMany?: LocationCreateManyStreetAddressInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type SubCityUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<SubCityCreateWithoutAddressesInput, SubCityUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: SubCityCreateOrConnectWithoutAddressesInput
    upsert?: SubCityUpsertWithoutAddressesInput
    connect?: SubCityWhereUniqueInput
    update?: XOR<XOR<SubCityUpdateToOneWithWhereWithoutAddressesInput, SubCityUpdateWithoutAddressesInput>, SubCityUncheckedUpdateWithoutAddressesInput>
  }

  export type LocationUpdateManyWithoutStreetAddressNestedInput = {
    create?: XOR<LocationCreateWithoutStreetAddressInput, LocationUncheckedCreateWithoutStreetAddressInput> | LocationCreateWithoutStreetAddressInput[] | LocationUncheckedCreateWithoutStreetAddressInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutStreetAddressInput | LocationCreateOrConnectWithoutStreetAddressInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutStreetAddressInput | LocationUpsertWithWhereUniqueWithoutStreetAddressInput[]
    createMany?: LocationCreateManyStreetAddressInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutStreetAddressInput | LocationUpdateWithWhereUniqueWithoutStreetAddressInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutStreetAddressInput | LocationUpdateManyWithWhereWithoutStreetAddressInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutStreetAddressNestedInput = {
    create?: XOR<LocationCreateWithoutStreetAddressInput, LocationUncheckedCreateWithoutStreetAddressInput> | LocationCreateWithoutStreetAddressInput[] | LocationUncheckedCreateWithoutStreetAddressInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutStreetAddressInput | LocationCreateOrConnectWithoutStreetAddressInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutStreetAddressInput | LocationUpsertWithWhereUniqueWithoutStreetAddressInput[]
    createMany?: LocationCreateManyStreetAddressInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutStreetAddressInput | LocationUpdateWithWhereUniqueWithoutStreetAddressInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutStreetAddressInput | LocationUpdateManyWithWhereWithoutStreetAddressInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ParkingLotCreateNestedOneWithoutLocationsInput = {
    create?: XOR<ParkingLotCreateWithoutLocationsInput, ParkingLotUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutLocationsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type StreetAddressCreateNestedOneWithoutLocationsInput = {
    create?: XOR<StreetAddressCreateWithoutLocationsInput, StreetAddressUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: StreetAddressCreateOrConnectWithoutLocationsInput
    connect?: StreetAddressWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingLotUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutLocationsInput, ParkingLotUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutLocationsInput
    upsert?: ParkingLotUpsertWithoutLocationsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutLocationsInput, ParkingLotUpdateWithoutLocationsInput>, ParkingLotUncheckedUpdateWithoutLocationsInput>
  }

  export type StreetAddressUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<StreetAddressCreateWithoutLocationsInput, StreetAddressUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: StreetAddressCreateOrConnectWithoutLocationsInput
    upsert?: StreetAddressUpsertWithoutLocationsInput
    connect?: StreetAddressWhereUniqueInput
    update?: XOR<XOR<StreetAddressUpdateToOneWithWhereWithoutLocationsInput, StreetAddressUpdateWithoutLocationsInput>, StreetAddressUncheckedUpdateWithoutLocationsInput>
  }

  export type OwnerCreateNestedOneWithoutParkingLotsInput = {
    create?: XOR<OwnerCreateWithoutParkingLotsInput, OwnerUncheckedCreateWithoutParkingLotsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutParkingLotsInput
    connect?: OwnerWhereUniqueInput
  }

  export type ParkingSpaceCreateNestedManyWithoutLotInput = {
    create?: XOR<ParkingSpaceCreateWithoutLotInput, ParkingSpaceUncheckedCreateWithoutLotInput> | ParkingSpaceCreateWithoutLotInput[] | ParkingSpaceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutLotInput | ParkingSpaceCreateOrConnectWithoutLotInput[]
    createMany?: ParkingSpaceCreateManyLotInputEnvelope
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<LocationCreateWithoutParkingLotInput, LocationUncheckedCreateWithoutParkingLotInput> | LocationCreateWithoutParkingLotInput[] | LocationUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParkingLotInput | LocationCreateOrConnectWithoutParkingLotInput[]
    createMany?: LocationCreateManyParkingLotInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type PriceCreateNestedManyWithoutLotInput = {
    create?: XOR<PriceCreateWithoutLotInput, PriceUncheckedCreateWithoutLotInput> | PriceCreateWithoutLotInput[] | PriceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutLotInput | PriceCreateOrConnectWithoutLotInput[]
    createMany?: PriceCreateManyLotInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutLotInput = {
    create?: XOR<ReviewCreateWithoutLotInput, ReviewUncheckedCreateWithoutLotInput> | ReviewCreateWithoutLotInput[] | ReviewUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLotInput | ReviewCreateOrConnectWithoutLotInput[]
    createMany?: ReviewCreateManyLotInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutLotInput = {
    create?: XOR<BookingCreateWithoutLotInput, BookingUncheckedCreateWithoutLotInput> | BookingCreateWithoutLotInput[] | BookingUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLotInput | BookingCreateOrConnectWithoutLotInput[]
    createMany?: BookingCreateManyLotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingSpaceUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<ParkingSpaceCreateWithoutLotInput, ParkingSpaceUncheckedCreateWithoutLotInput> | ParkingSpaceCreateWithoutLotInput[] | ParkingSpaceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutLotInput | ParkingSpaceCreateOrConnectWithoutLotInput[]
    createMany?: ParkingSpaceCreateManyLotInputEnvelope
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<LocationCreateWithoutParkingLotInput, LocationUncheckedCreateWithoutParkingLotInput> | LocationCreateWithoutParkingLotInput[] | LocationUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParkingLotInput | LocationCreateOrConnectWithoutParkingLotInput[]
    createMany?: LocationCreateManyParkingLotInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<PriceCreateWithoutLotInput, PriceUncheckedCreateWithoutLotInput> | PriceCreateWithoutLotInput[] | PriceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutLotInput | PriceCreateOrConnectWithoutLotInput[]
    createMany?: PriceCreateManyLotInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<ReviewCreateWithoutLotInput, ReviewUncheckedCreateWithoutLotInput> | ReviewCreateWithoutLotInput[] | ReviewUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLotInput | ReviewCreateOrConnectWithoutLotInput[]
    createMany?: ReviewCreateManyLotInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<BookingCreateWithoutLotInput, BookingUncheckedCreateWithoutLotInput> | BookingCreateWithoutLotInput[] | BookingUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLotInput | BookingCreateOrConnectWithoutLotInput[]
    createMany?: BookingCreateManyLotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OwnerUpdateOneRequiredWithoutParkingLotsNestedInput = {
    create?: XOR<OwnerCreateWithoutParkingLotsInput, OwnerUncheckedCreateWithoutParkingLotsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutParkingLotsInput
    upsert?: OwnerUpsertWithoutParkingLotsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutParkingLotsInput, OwnerUpdateWithoutParkingLotsInput>, OwnerUncheckedUpdateWithoutParkingLotsInput>
  }

  export type ParkingSpaceUpdateManyWithoutLotNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutLotInput, ParkingSpaceUncheckedCreateWithoutLotInput> | ParkingSpaceCreateWithoutLotInput[] | ParkingSpaceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutLotInput | ParkingSpaceCreateOrConnectWithoutLotInput[]
    upsert?: ParkingSpaceUpsertWithWhereUniqueWithoutLotInput | ParkingSpaceUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: ParkingSpaceCreateManyLotInputEnvelope
    set?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    disconnect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    delete?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    update?: ParkingSpaceUpdateWithWhereUniqueWithoutLotInput | ParkingSpaceUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: ParkingSpaceUpdateManyWithWhereWithoutLotInput | ParkingSpaceUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<LocationCreateWithoutParkingLotInput, LocationUncheckedCreateWithoutParkingLotInput> | LocationCreateWithoutParkingLotInput[] | LocationUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParkingLotInput | LocationCreateOrConnectWithoutParkingLotInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutParkingLotInput | LocationUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: LocationCreateManyParkingLotInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutParkingLotInput | LocationUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutParkingLotInput | LocationUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type PriceUpdateManyWithoutLotNestedInput = {
    create?: XOR<PriceCreateWithoutLotInput, PriceUncheckedCreateWithoutLotInput> | PriceCreateWithoutLotInput[] | PriceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutLotInput | PriceCreateOrConnectWithoutLotInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutLotInput | PriceUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: PriceCreateManyLotInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutLotInput | PriceUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutLotInput | PriceUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutLotNestedInput = {
    create?: XOR<ReviewCreateWithoutLotInput, ReviewUncheckedCreateWithoutLotInput> | ReviewCreateWithoutLotInput[] | ReviewUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLotInput | ReviewCreateOrConnectWithoutLotInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutLotInput | ReviewUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: ReviewCreateManyLotInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutLotInput | ReviewUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutLotInput | ReviewUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutLotNestedInput = {
    create?: XOR<BookingCreateWithoutLotInput, BookingUncheckedCreateWithoutLotInput> | BookingCreateWithoutLotInput[] | BookingUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLotInput | BookingCreateOrConnectWithoutLotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutLotInput | BookingUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: BookingCreateManyLotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutLotInput | BookingUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutLotInput | BookingUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutLotInput, ParkingSpaceUncheckedCreateWithoutLotInput> | ParkingSpaceCreateWithoutLotInput[] | ParkingSpaceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutLotInput | ParkingSpaceCreateOrConnectWithoutLotInput[]
    upsert?: ParkingSpaceUpsertWithWhereUniqueWithoutLotInput | ParkingSpaceUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: ParkingSpaceCreateManyLotInputEnvelope
    set?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    disconnect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    delete?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    update?: ParkingSpaceUpdateWithWhereUniqueWithoutLotInput | ParkingSpaceUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: ParkingSpaceUpdateManyWithWhereWithoutLotInput | ParkingSpaceUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<LocationCreateWithoutParkingLotInput, LocationUncheckedCreateWithoutParkingLotInput> | LocationCreateWithoutParkingLotInput[] | LocationUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParkingLotInput | LocationCreateOrConnectWithoutParkingLotInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutParkingLotInput | LocationUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: LocationCreateManyParkingLotInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutParkingLotInput | LocationUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutParkingLotInput | LocationUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<PriceCreateWithoutLotInput, PriceUncheckedCreateWithoutLotInput> | PriceCreateWithoutLotInput[] | PriceUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutLotInput | PriceCreateOrConnectWithoutLotInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutLotInput | PriceUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: PriceCreateManyLotInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutLotInput | PriceUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutLotInput | PriceUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<ReviewCreateWithoutLotInput, ReviewUncheckedCreateWithoutLotInput> | ReviewCreateWithoutLotInput[] | ReviewUncheckedCreateWithoutLotInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLotInput | ReviewCreateOrConnectWithoutLotInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutLotInput | ReviewUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: ReviewCreateManyLotInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutLotInput | ReviewUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutLotInput | ReviewUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<BookingCreateWithoutLotInput, BookingUncheckedCreateWithoutLotInput> | BookingCreateWithoutLotInput[] | BookingUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLotInput | BookingCreateOrConnectWithoutLotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutLotInput | BookingUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: BookingCreateManyLotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutLotInput | BookingUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutLotInput | BookingUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingLotCreateNestedOneWithoutSpacesInput = {
    create?: XOR<ParkingLotCreateWithoutSpacesInput, ParkingLotUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutSpacesInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type AvailabilityLogCreateNestedManyWithoutSpaceInput = {
    create?: XOR<AvailabilityLogCreateWithoutSpaceInput, AvailabilityLogUncheckedCreateWithoutSpaceInput> | AvailabilityLogCreateWithoutSpaceInput[] | AvailabilityLogUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AvailabilityLogCreateOrConnectWithoutSpaceInput | AvailabilityLogCreateOrConnectWithoutSpaceInput[]
    createMany?: AvailabilityLogCreateManySpaceInputEnvelope
    connect?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutSpaceInput = {
    create?: XOR<BookingCreateWithoutSpaceInput, BookingUncheckedCreateWithoutSpaceInput> | BookingCreateWithoutSpaceInput[] | BookingUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpaceInput | BookingCreateOrConnectWithoutSpaceInput[]
    createMany?: BookingCreateManySpaceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AvailabilityLogUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<AvailabilityLogCreateWithoutSpaceInput, AvailabilityLogUncheckedCreateWithoutSpaceInput> | AvailabilityLogCreateWithoutSpaceInput[] | AvailabilityLogUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AvailabilityLogCreateOrConnectWithoutSpaceInput | AvailabilityLogCreateOrConnectWithoutSpaceInput[]
    createMany?: AvailabilityLogCreateManySpaceInputEnvelope
    connect?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<BookingCreateWithoutSpaceInput, BookingUncheckedCreateWithoutSpaceInput> | BookingCreateWithoutSpaceInput[] | BookingUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpaceInput | BookingCreateOrConnectWithoutSpaceInput[]
    createMany?: BookingCreateManySpaceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumSpaceStatusFieldUpdateOperationsInput = {
    set?: $Enums.SpaceStatus
  }

  export type ParkingLotUpdateOneRequiredWithoutSpacesNestedInput = {
    create?: XOR<ParkingLotCreateWithoutSpacesInput, ParkingLotUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutSpacesInput
    upsert?: ParkingLotUpsertWithoutSpacesInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutSpacesInput, ParkingLotUpdateWithoutSpacesInput>, ParkingLotUncheckedUpdateWithoutSpacesInput>
  }

  export type AvailabilityLogUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<AvailabilityLogCreateWithoutSpaceInput, AvailabilityLogUncheckedCreateWithoutSpaceInput> | AvailabilityLogCreateWithoutSpaceInput[] | AvailabilityLogUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AvailabilityLogCreateOrConnectWithoutSpaceInput | AvailabilityLogCreateOrConnectWithoutSpaceInput[]
    upsert?: AvailabilityLogUpsertWithWhereUniqueWithoutSpaceInput | AvailabilityLogUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: AvailabilityLogCreateManySpaceInputEnvelope
    set?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    disconnect?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    delete?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    connect?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    update?: AvailabilityLogUpdateWithWhereUniqueWithoutSpaceInput | AvailabilityLogUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: AvailabilityLogUpdateManyWithWhereWithoutSpaceInput | AvailabilityLogUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: AvailabilityLogScalarWhereInput | AvailabilityLogScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<BookingCreateWithoutSpaceInput, BookingUncheckedCreateWithoutSpaceInput> | BookingCreateWithoutSpaceInput[] | BookingUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpaceInput | BookingCreateOrConnectWithoutSpaceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSpaceInput | BookingUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: BookingCreateManySpaceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSpaceInput | BookingUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSpaceInput | BookingUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AvailabilityLogUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<AvailabilityLogCreateWithoutSpaceInput, AvailabilityLogUncheckedCreateWithoutSpaceInput> | AvailabilityLogCreateWithoutSpaceInput[] | AvailabilityLogUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AvailabilityLogCreateOrConnectWithoutSpaceInput | AvailabilityLogCreateOrConnectWithoutSpaceInput[]
    upsert?: AvailabilityLogUpsertWithWhereUniqueWithoutSpaceInput | AvailabilityLogUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: AvailabilityLogCreateManySpaceInputEnvelope
    set?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    disconnect?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    delete?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    connect?: AvailabilityLogWhereUniqueInput | AvailabilityLogWhereUniqueInput[]
    update?: AvailabilityLogUpdateWithWhereUniqueWithoutSpaceInput | AvailabilityLogUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: AvailabilityLogUpdateManyWithWhereWithoutSpaceInput | AvailabilityLogUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: AvailabilityLogScalarWhereInput | AvailabilityLogScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<BookingCreateWithoutSpaceInput, BookingUncheckedCreateWithoutSpaceInput> | BookingCreateWithoutSpaceInput[] | BookingUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpaceInput | BookingCreateOrConnectWithoutSpaceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSpaceInput | BookingUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: BookingCreateManySpaceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSpaceInput | BookingUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSpaceInput | BookingUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingSpaceCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<ParkingSpaceCreateWithoutAvailabilityInput, ParkingSpaceUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutAvailabilityInput
    connect?: ParkingSpaceWhereUniqueInput
  }

  export type ParkingSpaceUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutAvailabilityInput, ParkingSpaceUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutAvailabilityInput
    upsert?: ParkingSpaceUpsertWithoutAvailabilityInput
    connect?: ParkingSpaceWhereUniqueInput
    update?: XOR<XOR<ParkingSpaceUpdateToOneWithWhereWithoutAvailabilityInput, ParkingSpaceUpdateWithoutAvailabilityInput>, ParkingSpaceUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingSpaceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutBookingsInput
    connect?: ParkingSpaceWhereUniqueInput
  }

  export type ParkingLotCreateNestedOneWithoutBookingInput = {
    create?: XOR<ParkingLotCreateWithoutBookingInput, ParkingLotUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutBookingInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumBookStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutBookingsInput
    upsert?: ParkingSpaceUpsertWithoutBookingsInput
    connect?: ParkingSpaceWhereUniqueInput
    update?: XOR<XOR<ParkingSpaceUpdateToOneWithWhereWithoutBookingsInput, ParkingSpaceUpdateWithoutBookingsInput>, ParkingSpaceUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingLotUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<ParkingLotCreateWithoutBookingInput, ParkingLotUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutBookingInput
    upsert?: ParkingLotUpsertWithoutBookingInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutBookingInput, ParkingLotUpdateWithoutBookingInput>, ParkingLotUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type ParkingLotCreateNestedOneWithoutPricesInput = {
    create?: XOR<ParkingLotCreateWithoutPricesInput, ParkingLotUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutPricesInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type ParkingLotUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ParkingLotCreateWithoutPricesInput, ParkingLotUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutPricesInput
    upsert?: ParkingLotUpsertWithoutPricesInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutPricesInput, ParkingLotUpdateWithoutPricesInput>, ParkingLotUncheckedUpdateWithoutPricesInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingLotCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ParkingLotCreateWithoutReviewsInput, ParkingLotUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutReviewsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ParkingLotUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutReviewsInput, ParkingLotUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutReviewsInput
    upsert?: ParkingLotUpsertWithoutReviewsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutReviewsInput, ParkingLotUpdateWithoutReviewsInput>, ParkingLotUncheckedUpdateWithoutReviewsInput>
  }

  export type OwnerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutNotificationsInput
    connect?: OwnerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type OwnerUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutNotificationsInput
    upsert?: OwnerUpsertWithoutNotificationsInput
    disconnect?: OwnerWhereInput | boolean
    delete?: OwnerWhereInput | boolean
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutNotificationsInput, OwnerUpdateWithoutNotificationsInput>, OwnerUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusFilter<$PrismaModel> | $Enums.AdminStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumAdminStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSpaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceStatus | EnumSpaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceStatusFilter<$PrismaModel> | $Enums.SpaceStatus
  }

  export type NestedEnumSpaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceStatus | EnumSpaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceStatus[] | ListEnumSpaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.SpaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpaceStatusFilter<$PrismaModel>
    _max?: NestedEnumSpaceStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusFilter<$PrismaModel> | $Enums.BookStatus
  }

  export type NestedEnumBookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookStatusFilter<$PrismaModel>
    _max?: NestedEnumBookStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingCreateWithoutUserInput = {
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    space: ParkingSpaceCreateNestedOneWithoutBookingsInput
    lot: ParkingLotCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    booking_id?: number
    lot_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    amount: number
    payment_method: string
    payment_date?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    payment_id?: number
    booking_id: number
    amount: number
    payment_method: string
    payment_date?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment: string
    review_date?: Date | string
    lot: ParkingLotCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    review_id?: number
    lot_id: number
    rating: number
    comment: string
    review_date?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    sent_at?: Date | string
    owner?: OwnerCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    notification_id?: number
    owner_id?: number | null
    message: string
    sent_at?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    booking_id?: IntFilter<"Booking"> | number
    lot_id?: IntFilter<"Booking"> | number
    user_id?: IntFilter<"Booking"> | number
    space_id?: IntFilter<"Booking"> | number
    start_time?: DateTimeFilter<"Booking"> | Date | string
    end_time?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookStatusFilter<"Booking"> | $Enums.BookStatus
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    booking_id?: IntFilter<"Payment"> | number
    user_id?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    payment_method?: StringFilter<"Payment"> | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    review_id?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    lot_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    review_date?: DateTimeFilter<"Review"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    notification_id?: IntFilter<"Notification"> | number
    owner_id?: IntNullableFilter<"Notification"> | number | null
    user_id?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    sent_at?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ParkingLotCreateWithoutOwnerInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceCreateNestedManyWithoutLotInput
    locations?: LocationCreateNestedManyWithoutParkingLotInput
    prices?: PriceCreateNestedManyWithoutLotInput
    reviews?: ReviewCreateNestedManyWithoutLotInput
    booking?: BookingCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateWithoutOwnerInput = {
    lot_id?: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceUncheckedCreateNestedManyWithoutLotInput
    locations?: LocationUncheckedCreateNestedManyWithoutParkingLotInput
    prices?: PriceUncheckedCreateNestedManyWithoutLotInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLotInput
    booking?: BookingUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotCreateOrConnectWithoutOwnerInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingLotCreateManyOwnerInputEnvelope = {
    data: ParkingLotCreateManyOwnerInput | ParkingLotCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutOwnerInput = {
    message: string
    sent_at?: Date | string
    user?: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutOwnerInput = {
    notification_id?: number
    user_id?: number | null
    message: string
    sent_at?: Date | string
  }

  export type NotificationCreateOrConnectWithoutOwnerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput>
  }

  export type NotificationCreateManyOwnerInputEnvelope = {
    data: NotificationCreateManyOwnerInput | NotificationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ParkingLotWhereUniqueInput
    update: XOR<ParkingLotUpdateWithoutOwnerInput, ParkingLotUncheckedUpdateWithoutOwnerInput>
    create: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingLotUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ParkingLotWhereUniqueInput
    data: XOR<ParkingLotUpdateWithoutOwnerInput, ParkingLotUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingLotUpdateManyWithWhereWithoutOwnerInput = {
    where: ParkingLotScalarWhereInput
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ParkingLotScalarWhereInput = {
    AND?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
    OR?: ParkingLotScalarWhereInput[]
    NOT?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
    lot_id?: IntFilter<"ParkingLot"> | number
    owner_id?: IntFilter<"ParkingLot"> | number
    lot_name?: StringFilter<"ParkingLot"> | string
    image?: StringNullableFilter<"ParkingLot"> | string | null
    capacity?: IntFilter<"ParkingLot"> | number
    created_at?: DateTimeFilter<"ParkingLot"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutOwnerInput, NotificationUncheckedUpdateWithoutOwnerInput>
    create: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutOwnerInput, NotificationUncheckedUpdateWithoutOwnerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutOwnerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SubCityCreateWithoutCityInput = {
    sub_city_name: string
    created_at?: Date | string
    addresses?: StreetAddressCreateNestedManyWithoutSubCityInput
  }

  export type SubCityUncheckedCreateWithoutCityInput = {
    sub_city_id?: number
    sub_city_name: string
    created_at?: Date | string
    addresses?: StreetAddressUncheckedCreateNestedManyWithoutSubCityInput
  }

  export type SubCityCreateOrConnectWithoutCityInput = {
    where: SubCityWhereUniqueInput
    create: XOR<SubCityCreateWithoutCityInput, SubCityUncheckedCreateWithoutCityInput>
  }

  export type SubCityCreateManyCityInputEnvelope = {
    data: SubCityCreateManyCityInput | SubCityCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type SubCityUpsertWithWhereUniqueWithoutCityInput = {
    where: SubCityWhereUniqueInput
    update: XOR<SubCityUpdateWithoutCityInput, SubCityUncheckedUpdateWithoutCityInput>
    create: XOR<SubCityCreateWithoutCityInput, SubCityUncheckedCreateWithoutCityInput>
  }

  export type SubCityUpdateWithWhereUniqueWithoutCityInput = {
    where: SubCityWhereUniqueInput
    data: XOR<SubCityUpdateWithoutCityInput, SubCityUncheckedUpdateWithoutCityInput>
  }

  export type SubCityUpdateManyWithWhereWithoutCityInput = {
    where: SubCityScalarWhereInput
    data: XOR<SubCityUpdateManyMutationInput, SubCityUncheckedUpdateManyWithoutCityInput>
  }

  export type SubCityScalarWhereInput = {
    AND?: SubCityScalarWhereInput | SubCityScalarWhereInput[]
    OR?: SubCityScalarWhereInput[]
    NOT?: SubCityScalarWhereInput | SubCityScalarWhereInput[]
    sub_city_id?: IntFilter<"SubCity"> | number
    city_id?: IntFilter<"SubCity"> | number
    sub_city_name?: StringFilter<"SubCity"> | string
    created_at?: DateTimeFilter<"SubCity"> | Date | string
  }

  export type CityCreateWithoutSubCitiesInput = {
    city_name: string
    state: string
    created_at?: Date | string
  }

  export type CityUncheckedCreateWithoutSubCitiesInput = {
    city_id?: number
    city_name: string
    state: string
    created_at?: Date | string
  }

  export type CityCreateOrConnectWithoutSubCitiesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutSubCitiesInput, CityUncheckedCreateWithoutSubCitiesInput>
  }

  export type StreetAddressCreateWithoutSubCityInput = {
    street_address: string
    zip_code: string
    created_at?: Date | string
    locations?: LocationCreateNestedManyWithoutStreetAddressInput
  }

  export type StreetAddressUncheckedCreateWithoutSubCityInput = {
    street_address_id?: number
    street_address: string
    zip_code: string
    created_at?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutStreetAddressInput
  }

  export type StreetAddressCreateOrConnectWithoutSubCityInput = {
    where: StreetAddressWhereUniqueInput
    create: XOR<StreetAddressCreateWithoutSubCityInput, StreetAddressUncheckedCreateWithoutSubCityInput>
  }

  export type StreetAddressCreateManySubCityInputEnvelope = {
    data: StreetAddressCreateManySubCityInput | StreetAddressCreateManySubCityInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutSubCitiesInput = {
    update: XOR<CityUpdateWithoutSubCitiesInput, CityUncheckedUpdateWithoutSubCitiesInput>
    create: XOR<CityCreateWithoutSubCitiesInput, CityUncheckedCreateWithoutSubCitiesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutSubCitiesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutSubCitiesInput, CityUncheckedUpdateWithoutSubCitiesInput>
  }

  export type CityUpdateWithoutSubCitiesInput = {
    city_name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateWithoutSubCitiesInput = {
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetAddressUpsertWithWhereUniqueWithoutSubCityInput = {
    where: StreetAddressWhereUniqueInput
    update: XOR<StreetAddressUpdateWithoutSubCityInput, StreetAddressUncheckedUpdateWithoutSubCityInput>
    create: XOR<StreetAddressCreateWithoutSubCityInput, StreetAddressUncheckedCreateWithoutSubCityInput>
  }

  export type StreetAddressUpdateWithWhereUniqueWithoutSubCityInput = {
    where: StreetAddressWhereUniqueInput
    data: XOR<StreetAddressUpdateWithoutSubCityInput, StreetAddressUncheckedUpdateWithoutSubCityInput>
  }

  export type StreetAddressUpdateManyWithWhereWithoutSubCityInput = {
    where: StreetAddressScalarWhereInput
    data: XOR<StreetAddressUpdateManyMutationInput, StreetAddressUncheckedUpdateManyWithoutSubCityInput>
  }

  export type StreetAddressScalarWhereInput = {
    AND?: StreetAddressScalarWhereInput | StreetAddressScalarWhereInput[]
    OR?: StreetAddressScalarWhereInput[]
    NOT?: StreetAddressScalarWhereInput | StreetAddressScalarWhereInput[]
    street_address_id?: IntFilter<"StreetAddress"> | number
    sub_city_id?: IntFilter<"StreetAddress"> | number
    street_address?: StringFilter<"StreetAddress"> | string
    zip_code?: StringFilter<"StreetAddress"> | string
    created_at?: DateTimeFilter<"StreetAddress"> | Date | string
  }

  export type SubCityCreateWithoutAddressesInput = {
    sub_city_name: string
    created_at?: Date | string
    city: CityCreateNestedOneWithoutSubCitiesInput
  }

  export type SubCityUncheckedCreateWithoutAddressesInput = {
    sub_city_id?: number
    city_id: number
    sub_city_name: string
    created_at?: Date | string
  }

  export type SubCityCreateOrConnectWithoutAddressesInput = {
    where: SubCityWhereUniqueInput
    create: XOR<SubCityCreateWithoutAddressesInput, SubCityUncheckedCreateWithoutAddressesInput>
  }

  export type LocationCreateWithoutStreetAddressInput = {
    latitude: number
    longitude: number
    created_at?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutStreetAddressInput = {
    location_id?: number
    lot_id: number
    latitude: number
    longitude: number
    created_at?: Date | string
  }

  export type LocationCreateOrConnectWithoutStreetAddressInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutStreetAddressInput, LocationUncheckedCreateWithoutStreetAddressInput>
  }

  export type LocationCreateManyStreetAddressInputEnvelope = {
    data: LocationCreateManyStreetAddressInput | LocationCreateManyStreetAddressInput[]
    skipDuplicates?: boolean
  }

  export type SubCityUpsertWithoutAddressesInput = {
    update: XOR<SubCityUpdateWithoutAddressesInput, SubCityUncheckedUpdateWithoutAddressesInput>
    create: XOR<SubCityCreateWithoutAddressesInput, SubCityUncheckedCreateWithoutAddressesInput>
    where?: SubCityWhereInput
  }

  export type SubCityUpdateToOneWithWhereWithoutAddressesInput = {
    where?: SubCityWhereInput
    data: XOR<SubCityUpdateWithoutAddressesInput, SubCityUncheckedUpdateWithoutAddressesInput>
  }

  export type SubCityUpdateWithoutAddressesInput = {
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutSubCitiesNestedInput
  }

  export type SubCityUncheckedUpdateWithoutAddressesInput = {
    sub_city_id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutStreetAddressInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutStreetAddressInput, LocationUncheckedUpdateWithoutStreetAddressInput>
    create: XOR<LocationCreateWithoutStreetAddressInput, LocationUncheckedCreateWithoutStreetAddressInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutStreetAddressInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutStreetAddressInput, LocationUncheckedUpdateWithoutStreetAddressInput>
  }

  export type LocationUpdateManyWithWhereWithoutStreetAddressInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutStreetAddressInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    location_id?: IntFilter<"Location"> | number
    lot_id?: IntFilter<"Location"> | number
    street_address_id?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    created_at?: DateTimeFilter<"Location"> | Date | string
  }

  export type ParkingLotCreateWithoutLocationsInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    owner: OwnerCreateNestedOneWithoutParkingLotsInput
    spaces?: ParkingSpaceCreateNestedManyWithoutLotInput
    prices?: PriceCreateNestedManyWithoutLotInput
    reviews?: ReviewCreateNestedManyWithoutLotInput
    booking?: BookingCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateWithoutLocationsInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceUncheckedCreateNestedManyWithoutLotInput
    prices?: PriceUncheckedCreateNestedManyWithoutLotInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLotInput
    booking?: BookingUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotCreateOrConnectWithoutLocationsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutLocationsInput, ParkingLotUncheckedCreateWithoutLocationsInput>
  }

  export type StreetAddressCreateWithoutLocationsInput = {
    street_address: string
    zip_code: string
    created_at?: Date | string
    subCity: SubCityCreateNestedOneWithoutAddressesInput
  }

  export type StreetAddressUncheckedCreateWithoutLocationsInput = {
    street_address_id?: number
    sub_city_id: number
    street_address: string
    zip_code: string
    created_at?: Date | string
  }

  export type StreetAddressCreateOrConnectWithoutLocationsInput = {
    where: StreetAddressWhereUniqueInput
    create: XOR<StreetAddressCreateWithoutLocationsInput, StreetAddressUncheckedCreateWithoutLocationsInput>
  }

  export type ParkingLotUpsertWithoutLocationsInput = {
    update: XOR<ParkingLotUpdateWithoutLocationsInput, ParkingLotUncheckedUpdateWithoutLocationsInput>
    create: XOR<ParkingLotCreateWithoutLocationsInput, ParkingLotUncheckedCreateWithoutLocationsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutLocationsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutLocationsInput, ParkingLotUncheckedUpdateWithoutLocationsInput>
  }

  export type ParkingLotUpdateWithoutLocationsInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutParkingLotsNestedInput
    spaces?: ParkingSpaceUpdateManyWithoutLotNestedInput
    prices?: PriceUpdateManyWithoutLotNestedInput
    reviews?: ReviewUpdateManyWithoutLotNestedInput
    booking?: BookingUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutLocationsInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput
    prices?: PriceUncheckedUpdateManyWithoutLotNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLotNestedInput
    booking?: BookingUncheckedUpdateManyWithoutLotNestedInput
  }

  export type StreetAddressUpsertWithoutLocationsInput = {
    update: XOR<StreetAddressUpdateWithoutLocationsInput, StreetAddressUncheckedUpdateWithoutLocationsInput>
    create: XOR<StreetAddressCreateWithoutLocationsInput, StreetAddressUncheckedCreateWithoutLocationsInput>
    where?: StreetAddressWhereInput
  }

  export type StreetAddressUpdateToOneWithWhereWithoutLocationsInput = {
    where?: StreetAddressWhereInput
    data: XOR<StreetAddressUpdateWithoutLocationsInput, StreetAddressUncheckedUpdateWithoutLocationsInput>
  }

  export type StreetAddressUpdateWithoutLocationsInput = {
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subCity?: SubCityUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type StreetAddressUncheckedUpdateWithoutLocationsInput = {
    street_address_id?: IntFieldUpdateOperationsInput | number
    sub_city_id?: IntFieldUpdateOperationsInput | number
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateWithoutParkingLotsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    notifications?: NotificationCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutParkingLotsInput = {
    owner_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutParkingLotsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutParkingLotsInput, OwnerUncheckedCreateWithoutParkingLotsInput>
  }

  export type ParkingSpaceCreateWithoutLotInput = {
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    availability?: AvailabilityLogCreateNestedManyWithoutSpaceInput
    bookings?: BookingCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceUncheckedCreateWithoutLotInput = {
    space_id?: number
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    availability?: AvailabilityLogUncheckedCreateNestedManyWithoutSpaceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceCreateOrConnectWithoutLotInput = {
    where: ParkingSpaceWhereUniqueInput
    create: XOR<ParkingSpaceCreateWithoutLotInput, ParkingSpaceUncheckedCreateWithoutLotInput>
  }

  export type ParkingSpaceCreateManyLotInputEnvelope = {
    data: ParkingSpaceCreateManyLotInput | ParkingSpaceCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutParkingLotInput = {
    latitude: number
    longitude: number
    created_at?: Date | string
    streetAddress: StreetAddressCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutParkingLotInput = {
    location_id?: number
    street_address_id: number
    latitude: number
    longitude: number
    created_at?: Date | string
  }

  export type LocationCreateOrConnectWithoutParkingLotInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutParkingLotInput, LocationUncheckedCreateWithoutParkingLotInput>
  }

  export type LocationCreateManyParkingLotInputEnvelope = {
    data: LocationCreateManyParkingLotInput | LocationCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type PriceCreateWithoutLotInput = {
    price_per_hour: number
    effective_date: Date | string
  }

  export type PriceUncheckedCreateWithoutLotInput = {
    price_id?: number
    price_per_hour: number
    effective_date: Date | string
  }

  export type PriceCreateOrConnectWithoutLotInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutLotInput, PriceUncheckedCreateWithoutLotInput>
  }

  export type PriceCreateManyLotInputEnvelope = {
    data: PriceCreateManyLotInput | PriceCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutLotInput = {
    rating: number
    comment: string
    review_date?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutLotInput = {
    review_id?: number
    user_id: number
    rating: number
    comment: string
    review_date?: Date | string
  }

  export type ReviewCreateOrConnectWithoutLotInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutLotInput, ReviewUncheckedCreateWithoutLotInput>
  }

  export type ReviewCreateManyLotInputEnvelope = {
    data: ReviewCreateManyLotInput | ReviewCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutLotInput = {
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    user: UserCreateNestedOneWithoutBookingsInput
    space: ParkingSpaceCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutLotInput = {
    booking_id?: number
    user_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutLotInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutLotInput, BookingUncheckedCreateWithoutLotInput>
  }

  export type BookingCreateManyLotInputEnvelope = {
    data: BookingCreateManyLotInput | BookingCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type OwnerUpsertWithoutParkingLotsInput = {
    update: XOR<OwnerUpdateWithoutParkingLotsInput, OwnerUncheckedUpdateWithoutParkingLotsInput>
    create: XOR<OwnerCreateWithoutParkingLotsInput, OwnerUncheckedCreateWithoutParkingLotsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutParkingLotsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutParkingLotsInput, OwnerUncheckedUpdateWithoutParkingLotsInput>
  }

  export type OwnerUpdateWithoutParkingLotsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutParkingLotsInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ParkingSpaceUpsertWithWhereUniqueWithoutLotInput = {
    where: ParkingSpaceWhereUniqueInput
    update: XOR<ParkingSpaceUpdateWithoutLotInput, ParkingSpaceUncheckedUpdateWithoutLotInput>
    create: XOR<ParkingSpaceCreateWithoutLotInput, ParkingSpaceUncheckedCreateWithoutLotInput>
  }

  export type ParkingSpaceUpdateWithWhereUniqueWithoutLotInput = {
    where: ParkingSpaceWhereUniqueInput
    data: XOR<ParkingSpaceUpdateWithoutLotInput, ParkingSpaceUncheckedUpdateWithoutLotInput>
  }

  export type ParkingSpaceUpdateManyWithWhereWithoutLotInput = {
    where: ParkingSpaceScalarWhereInput
    data: XOR<ParkingSpaceUpdateManyMutationInput, ParkingSpaceUncheckedUpdateManyWithoutLotInput>
  }

  export type ParkingSpaceScalarWhereInput = {
    AND?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
    OR?: ParkingSpaceScalarWhereInput[]
    NOT?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
    space_id?: IntFilter<"ParkingSpace"> | number
    lot_id?: IntFilter<"ParkingSpace"> | number
    space_number?: StringFilter<"ParkingSpace"> | string
    is_handicap?: BoolFilter<"ParkingSpace"> | boolean
    status?: EnumSpaceStatusFilter<"ParkingSpace"> | $Enums.SpaceStatus
    created_at?: DateTimeFilter<"ParkingSpace"> | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutParkingLotInput, LocationUncheckedUpdateWithoutParkingLotInput>
    create: XOR<LocationCreateWithoutParkingLotInput, LocationUncheckedCreateWithoutParkingLotInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutParkingLotInput, LocationUncheckedUpdateWithoutParkingLotInput>
  }

  export type LocationUpdateManyWithWhereWithoutParkingLotInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type PriceUpsertWithWhereUniqueWithoutLotInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutLotInput, PriceUncheckedUpdateWithoutLotInput>
    create: XOR<PriceCreateWithoutLotInput, PriceUncheckedCreateWithoutLotInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutLotInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutLotInput, PriceUncheckedUpdateWithoutLotInput>
  }

  export type PriceUpdateManyWithWhereWithoutLotInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutLotInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    price_id?: IntFilter<"Price"> | number
    lot_id?: IntFilter<"Price"> | number
    price_per_hour?: FloatFilter<"Price"> | number
    effective_date?: DateTimeFilter<"Price"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutLotInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutLotInput, ReviewUncheckedUpdateWithoutLotInput>
    create: XOR<ReviewCreateWithoutLotInput, ReviewUncheckedCreateWithoutLotInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutLotInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutLotInput, ReviewUncheckedUpdateWithoutLotInput>
  }

  export type ReviewUpdateManyWithWhereWithoutLotInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutLotInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutLotInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutLotInput, BookingUncheckedUpdateWithoutLotInput>
    create: XOR<BookingCreateWithoutLotInput, BookingUncheckedCreateWithoutLotInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutLotInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutLotInput, BookingUncheckedUpdateWithoutLotInput>
  }

  export type BookingUpdateManyWithWhereWithoutLotInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutLotInput>
  }

  export type ParkingLotCreateWithoutSpacesInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    owner: OwnerCreateNestedOneWithoutParkingLotsInput
    locations?: LocationCreateNestedManyWithoutParkingLotInput
    prices?: PriceCreateNestedManyWithoutLotInput
    reviews?: ReviewCreateNestedManyWithoutLotInput
    booking?: BookingCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateWithoutSpacesInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutParkingLotInput
    prices?: PriceUncheckedCreateNestedManyWithoutLotInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLotInput
    booking?: BookingUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotCreateOrConnectWithoutSpacesInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutSpacesInput, ParkingLotUncheckedCreateWithoutSpacesInput>
  }

  export type AvailabilityLogCreateWithoutSpaceInput = {
    status: string
    timestamp?: Date | string
  }

  export type AvailabilityLogUncheckedCreateWithoutSpaceInput = {
    log_id?: number
    status: string
    timestamp?: Date | string
  }

  export type AvailabilityLogCreateOrConnectWithoutSpaceInput = {
    where: AvailabilityLogWhereUniqueInput
    create: XOR<AvailabilityLogCreateWithoutSpaceInput, AvailabilityLogUncheckedCreateWithoutSpaceInput>
  }

  export type AvailabilityLogCreateManySpaceInputEnvelope = {
    data: AvailabilityLogCreateManySpaceInput | AvailabilityLogCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutSpaceInput = {
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    user: UserCreateNestedOneWithoutBookingsInput
    lot: ParkingLotCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSpaceInput = {
    booking_id?: number
    lot_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSpaceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSpaceInput, BookingUncheckedCreateWithoutSpaceInput>
  }

  export type BookingCreateManySpaceInputEnvelope = {
    data: BookingCreateManySpaceInput | BookingCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotUpsertWithoutSpacesInput = {
    update: XOR<ParkingLotUpdateWithoutSpacesInput, ParkingLotUncheckedUpdateWithoutSpacesInput>
    create: XOR<ParkingLotCreateWithoutSpacesInput, ParkingLotUncheckedCreateWithoutSpacesInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutSpacesInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutSpacesInput, ParkingLotUncheckedUpdateWithoutSpacesInput>
  }

  export type ParkingLotUpdateWithoutSpacesInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutParkingLotsNestedInput
    locations?: LocationUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUpdateManyWithoutLotNestedInput
    reviews?: ReviewUpdateManyWithoutLotNestedInput
    booking?: BookingUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutSpacesInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUncheckedUpdateManyWithoutLotNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLotNestedInput
    booking?: BookingUncheckedUpdateManyWithoutLotNestedInput
  }

  export type AvailabilityLogUpsertWithWhereUniqueWithoutSpaceInput = {
    where: AvailabilityLogWhereUniqueInput
    update: XOR<AvailabilityLogUpdateWithoutSpaceInput, AvailabilityLogUncheckedUpdateWithoutSpaceInput>
    create: XOR<AvailabilityLogCreateWithoutSpaceInput, AvailabilityLogUncheckedCreateWithoutSpaceInput>
  }

  export type AvailabilityLogUpdateWithWhereUniqueWithoutSpaceInput = {
    where: AvailabilityLogWhereUniqueInput
    data: XOR<AvailabilityLogUpdateWithoutSpaceInput, AvailabilityLogUncheckedUpdateWithoutSpaceInput>
  }

  export type AvailabilityLogUpdateManyWithWhereWithoutSpaceInput = {
    where: AvailabilityLogScalarWhereInput
    data: XOR<AvailabilityLogUpdateManyMutationInput, AvailabilityLogUncheckedUpdateManyWithoutSpaceInput>
  }

  export type AvailabilityLogScalarWhereInput = {
    AND?: AvailabilityLogScalarWhereInput | AvailabilityLogScalarWhereInput[]
    OR?: AvailabilityLogScalarWhereInput[]
    NOT?: AvailabilityLogScalarWhereInput | AvailabilityLogScalarWhereInput[]
    log_id?: IntFilter<"AvailabilityLog"> | number
    space_id?: IntFilter<"AvailabilityLog"> | number
    status?: StringFilter<"AvailabilityLog"> | string
    timestamp?: DateTimeFilter<"AvailabilityLog"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutSpaceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSpaceInput, BookingUncheckedUpdateWithoutSpaceInput>
    create: XOR<BookingCreateWithoutSpaceInput, BookingUncheckedCreateWithoutSpaceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSpaceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSpaceInput, BookingUncheckedUpdateWithoutSpaceInput>
  }

  export type BookingUpdateManyWithWhereWithoutSpaceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSpaceInput>
  }

  export type ParkingSpaceCreateWithoutAvailabilityInput = {
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    lot: ParkingLotCreateNestedOneWithoutSpacesInput
    bookings?: BookingCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceUncheckedCreateWithoutAvailabilityInput = {
    space_id?: number
    lot_id: number
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceCreateOrConnectWithoutAvailabilityInput = {
    where: ParkingSpaceWhereUniqueInput
    create: XOR<ParkingSpaceCreateWithoutAvailabilityInput, ParkingSpaceUncheckedCreateWithoutAvailabilityInput>
  }

  export type ParkingSpaceUpsertWithoutAvailabilityInput = {
    update: XOR<ParkingSpaceUpdateWithoutAvailabilityInput, ParkingSpaceUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<ParkingSpaceCreateWithoutAvailabilityInput, ParkingSpaceUncheckedCreateWithoutAvailabilityInput>
    where?: ParkingSpaceWhereInput
  }

  export type ParkingSpaceUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: ParkingSpaceWhereInput
    data: XOR<ParkingSpaceUpdateWithoutAvailabilityInput, ParkingSpaceUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ParkingSpaceUpdateWithoutAvailabilityInput = {
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: ParkingLotUpdateOneRequiredWithoutSpacesNestedInput
    bookings?: BookingUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateWithoutAvailabilityInput = {
    space_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ParkingSpaceCreateWithoutBookingsInput = {
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    lot: ParkingLotCreateNestedOneWithoutSpacesInput
    availability?: AvailabilityLogCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceUncheckedCreateWithoutBookingsInput = {
    space_id?: number
    lot_id: number
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
    availability?: AvailabilityLogUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type ParkingSpaceCreateOrConnectWithoutBookingsInput = {
    where: ParkingSpaceWhereUniqueInput
    create: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
  }

  export type ParkingLotCreateWithoutBookingInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    owner: OwnerCreateNestedOneWithoutParkingLotsInput
    spaces?: ParkingSpaceCreateNestedManyWithoutLotInput
    locations?: LocationCreateNestedManyWithoutParkingLotInput
    prices?: PriceCreateNestedManyWithoutLotInput
    reviews?: ReviewCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateWithoutBookingInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceUncheckedCreateNestedManyWithoutLotInput
    locations?: LocationUncheckedCreateNestedManyWithoutParkingLotInput
    prices?: PriceUncheckedCreateNestedManyWithoutLotInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotCreateOrConnectWithoutBookingInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutBookingInput, ParkingLotUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    amount: number
    payment_method: string
    payment_date?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    payment_id?: number
    user_id: number
    amount: number
    payment_method: string
    payment_date?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingSpaceUpsertWithoutBookingsInput = {
    update: XOR<ParkingSpaceUpdateWithoutBookingsInput, ParkingSpaceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
    where?: ParkingSpaceWhereInput
  }

  export type ParkingSpaceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingSpaceWhereInput
    data: XOR<ParkingSpaceUpdateWithoutBookingsInput, ParkingSpaceUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSpaceUpdateWithoutBookingsInput = {
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: ParkingLotUpdateOneRequiredWithoutSpacesNestedInput
    availability?: AvailabilityLogUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateWithoutBookingsInput = {
    space_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityLogUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingLotUpsertWithoutBookingInput = {
    update: XOR<ParkingLotUpdateWithoutBookingInput, ParkingLotUncheckedUpdateWithoutBookingInput>
    create: XOR<ParkingLotCreateWithoutBookingInput, ParkingLotUncheckedCreateWithoutBookingInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutBookingInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutBookingInput, ParkingLotUncheckedUpdateWithoutBookingInput>
  }

  export type ParkingLotUpdateWithoutBookingInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutParkingLotsNestedInput
    spaces?: ParkingSpaceUpdateManyWithoutLotNestedInput
    locations?: LocationUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUpdateManyWithoutLotNestedInput
    reviews?: ReviewUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutBookingInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput
    locations?: LocationUncheckedUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUncheckedUpdateManyWithoutLotNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLotNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingCreateWithoutPaymentInput = {
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
    user: UserCreateNestedOneWithoutBookingsInput
    space: ParkingSpaceCreateNestedOneWithoutBookingsInput
    lot: ParkingLotCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    booking_id?: number
    lot_id: number
    user_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    space?: ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput
    lot?: ParkingLotUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingLotCreateWithoutPricesInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    owner: OwnerCreateNestedOneWithoutParkingLotsInput
    spaces?: ParkingSpaceCreateNestedManyWithoutLotInput
    locations?: LocationCreateNestedManyWithoutParkingLotInput
    reviews?: ReviewCreateNestedManyWithoutLotInput
    booking?: BookingCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateWithoutPricesInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceUncheckedCreateNestedManyWithoutLotInput
    locations?: LocationUncheckedCreateNestedManyWithoutParkingLotInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLotInput
    booking?: BookingUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotCreateOrConnectWithoutPricesInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutPricesInput, ParkingLotUncheckedCreateWithoutPricesInput>
  }

  export type ParkingLotUpsertWithoutPricesInput = {
    update: XOR<ParkingLotUpdateWithoutPricesInput, ParkingLotUncheckedUpdateWithoutPricesInput>
    create: XOR<ParkingLotCreateWithoutPricesInput, ParkingLotUncheckedCreateWithoutPricesInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutPricesInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutPricesInput, ParkingLotUncheckedUpdateWithoutPricesInput>
  }

  export type ParkingLotUpdateWithoutPricesInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutParkingLotsNestedInput
    spaces?: ParkingSpaceUpdateManyWithoutLotNestedInput
    locations?: LocationUpdateManyWithoutParkingLotNestedInput
    reviews?: ReviewUpdateManyWithoutLotNestedInput
    booking?: BookingUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutPricesInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput
    locations?: LocationUncheckedUpdateManyWithoutParkingLotNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLotNestedInput
    booking?: BookingUncheckedUpdateManyWithoutLotNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ParkingLotCreateWithoutReviewsInput = {
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    owner: OwnerCreateNestedOneWithoutParkingLotsInput
    spaces?: ParkingSpaceCreateNestedManyWithoutLotInput
    locations?: LocationCreateNestedManyWithoutParkingLotInput
    prices?: PriceCreateNestedManyWithoutLotInput
    booking?: BookingCreateNestedManyWithoutLotInput
  }

  export type ParkingLotUncheckedCreateWithoutReviewsInput = {
    lot_id?: number
    owner_id: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
    spaces?: ParkingSpaceUncheckedCreateNestedManyWithoutLotInput
    locations?: LocationUncheckedCreateNestedManyWithoutParkingLotInput
    prices?: PriceUncheckedCreateNestedManyWithoutLotInput
    booking?: BookingUncheckedCreateNestedManyWithoutLotInput
  }

  export type ParkingLotCreateOrConnectWithoutReviewsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutReviewsInput, ParkingLotUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingLotUpsertWithoutReviewsInput = {
    update: XOR<ParkingLotUpdateWithoutReviewsInput, ParkingLotUncheckedUpdateWithoutReviewsInput>
    create: XOR<ParkingLotCreateWithoutReviewsInput, ParkingLotUncheckedCreateWithoutReviewsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutReviewsInput, ParkingLotUncheckedUpdateWithoutReviewsInput>
  }

  export type ParkingLotUpdateWithoutReviewsInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutParkingLotsNestedInput
    spaces?: ParkingSpaceUpdateManyWithoutLotNestedInput
    locations?: LocationUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUpdateManyWithoutLotNestedInput
    booking?: BookingUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutReviewsInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput
    locations?: LocationUncheckedUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUncheckedUpdateManyWithoutLotNestedInput
    booking?: BookingUncheckedUpdateManyWithoutLotNestedInput
  }

  export type OwnerCreateWithoutNotificationsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutNotificationsInput = {
    owner_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutNotificationsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    user_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    OTP: number
    isVerified?: boolean
    status?: $Enums.AdminStatus
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type OwnerUpsertWithoutNotificationsInput = {
    update: XOR<OwnerUpdateWithoutNotificationsInput, OwnerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutNotificationsInput, OwnerUncheckedUpdateWithoutNotificationsInput>
  }

  export type OwnerUpdateWithoutNotificationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutNotificationsInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OTP?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingCreateManyUserInput = {
    booking_id?: number
    lot_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
  }

  export type PaymentCreateManyUserInput = {
    payment_id?: number
    booking_id: number
    amount: number
    payment_method: string
    payment_date?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    review_id?: number
    lot_id: number
    rating: number
    comment: string
    review_date?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    notification_id?: number
    owner_id?: number | null
    message: string
    sent_at?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    space?: ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput
    lot?: ParkingLotUpdateOneRequiredWithoutBookingNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
  }

  export type PaymentUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: ParkingLotUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotCreateManyOwnerInput = {
    lot_id?: number
    lot_name: string
    image?: string | null
    capacity: number
    created_at?: Date | string
  }

  export type NotificationCreateManyOwnerInput = {
    notification_id?: number
    user_id?: number | null
    message: string
    sent_at?: Date | string
  }

  export type ParkingLotUpdateWithoutOwnerInput = {
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUpdateManyWithoutLotNestedInput
    locations?: LocationUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUpdateManyWithoutLotNestedInput
    reviews?: ReviewUpdateManyWithoutLotNestedInput
    booking?: BookingUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutOwnerInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: ParkingSpaceUncheckedUpdateManyWithoutLotNestedInput
    locations?: LocationUncheckedUpdateManyWithoutParkingLotNestedInput
    prices?: PriceUncheckedUpdateManyWithoutLotNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLotNestedInput
    booking?: BookingUncheckedUpdateManyWithoutLotNestedInput
  }

  export type ParkingLotUncheckedUpdateManyWithoutOwnerInput = {
    lot_id?: IntFieldUpdateOperationsInput | number
    lot_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutOwnerInput = {
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutOwnerInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutOwnerInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCityCreateManyCityInput = {
    sub_city_id?: number
    sub_city_name: string
    created_at?: Date | string
  }

  export type SubCityUpdateWithoutCityInput = {
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: StreetAddressUpdateManyWithoutSubCityNestedInput
  }

  export type SubCityUncheckedUpdateWithoutCityInput = {
    sub_city_id?: IntFieldUpdateOperationsInput | number
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: StreetAddressUncheckedUpdateManyWithoutSubCityNestedInput
  }

  export type SubCityUncheckedUpdateManyWithoutCityInput = {
    sub_city_id?: IntFieldUpdateOperationsInput | number
    sub_city_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetAddressCreateManySubCityInput = {
    street_address_id?: number
    street_address: string
    zip_code: string
    created_at?: Date | string
  }

  export type StreetAddressUpdateWithoutSubCityInput = {
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutStreetAddressNestedInput
  }

  export type StreetAddressUncheckedUpdateWithoutSubCityInput = {
    street_address_id?: IntFieldUpdateOperationsInput | number
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutStreetAddressNestedInput
  }

  export type StreetAddressUncheckedUpdateManyWithoutSubCityInput = {
    street_address_id?: IntFieldUpdateOperationsInput | number
    street_address?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyStreetAddressInput = {
    location_id?: number
    lot_id: number
    latitude: number
    longitude: number
    created_at?: Date | string
  }

  export type LocationUpdateWithoutStreetAddressInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutStreetAddressInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyWithoutStreetAddressInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpaceCreateManyLotInput = {
    space_id?: number
    space_number: string
    is_handicap: boolean
    status?: $Enums.SpaceStatus
    created_at?: Date | string
  }

  export type LocationCreateManyParkingLotInput = {
    location_id?: number
    street_address_id: number
    latitude: number
    longitude: number
    created_at?: Date | string
  }

  export type PriceCreateManyLotInput = {
    price_id?: number
    price_per_hour: number
    effective_date: Date | string
  }

  export type ReviewCreateManyLotInput = {
    review_id?: number
    user_id: number
    rating: number
    comment: string
    review_date?: Date | string
  }

  export type BookingCreateManyLotInput = {
    booking_id?: number
    user_id: number
    space_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
  }

  export type ParkingSpaceUpdateWithoutLotInput = {
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityLogUpdateManyWithoutSpaceNestedInput
    bookings?: BookingUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateWithoutLotInput = {
    space_id?: IntFieldUpdateOperationsInput | number
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityLogUncheckedUpdateManyWithoutSpaceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateManyWithoutLotInput = {
    space_id?: IntFieldUpdateOperationsInput | number
    space_number?: StringFieldUpdateOperationsInput | string
    is_handicap?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSpaceStatusFieldUpdateOperationsInput | $Enums.SpaceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutParkingLotInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    streetAddress?: StreetAddressUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutParkingLotInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    street_address_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyWithoutParkingLotInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    street_address_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUpdateWithoutLotInput = {
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateWithoutLotInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyWithoutLotInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    price_per_hour?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutLotInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutLotInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutLotInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutLotInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    space?: ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutLotInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutLotInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    space_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
  }

  export type AvailabilityLogCreateManySpaceInput = {
    log_id?: number
    status: string
    timestamp?: Date | string
  }

  export type BookingCreateManySpaceInput = {
    booking_id?: number
    lot_id: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    status: $Enums.BookStatus
  }

  export type AvailabilityLogUpdateWithoutSpaceInput = {
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityLogUncheckedUpdateWithoutSpaceInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityLogUncheckedUpdateManyWithoutSpaceInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutSpaceInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    lot?: ParkingLotUpdateOneRequiredWithoutBookingNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSpaceInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutSpaceInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    lot_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
  }

  export type PaymentCreateManyBookingInput = {
    payment_id?: number
    user_id: number
    amount: number
    payment_method: string
    payment_date?: Date | string
  }

  export type PaymentUpdateWithoutBookingInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}