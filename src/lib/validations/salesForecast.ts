import { z } from 'zod';

/**
 * Validation schema for Sales Forecast Calculator inputs
 */
export const SalesForecastSchema = z.object({
  initialVisits: z.number()
    .min(100, 'Mínimo 100 visitas')
    .max(10000000, 'Máximo 10M visitas'),
  monthlyGrowth: z.number()
    .min(0, 'No puede ser negativo')
    .max(1, 'Máximo 100%'),
  visitsToMQL: z.number()
    .min(0.001, 'Mínimo 0.1%')
    .max(0.5, 'Máximo 50%'),
  mqlToSQL: z.number()
    .min(0.01, 'Mínimo 1%')
    .max(1, 'Máximo 100%'),
  sqlToClient: z.number()
    .min(0.01, 'Mínimo 1%')
    .max(1, 'Máximo 100%'),
  revenuePerClient: z.number()
    .min(1, 'Mínimo 1 EUR')
    .max(1000000, 'Máximo 1M EUR'),
});

export type SalesForecastInputs = z.infer<typeof SalesForecastSchema>;

/**
 * Default values for the calculator
 */
export const defaultForecastInputs: SalesForecastInputs = {
  initialVisits: 10000,
  monthlyGrowth: 0.03,
  visitsToMQL: 0.01,
  mqlToSQL: 0.10,
  sqlToClient: 0.50,
  revenuePerClient: 100,
};

/**
 * Monthly data structure for forecast results
 */
export interface MonthlyForecast {
  month: number;
  monthName: string;
  growthRate: number;
  visitors: number;
  mqls: number;
  sqls: number;
  clients: number;
  revenue: number;
}

/**
 * Summary totals for the forecast
 */
export interface ForecastSummary {
  totalVisitors: number;
  totalMQLs: number;
  totalSQLs: number;
  totalClients: number;
  totalRevenue: number;
  totalGrowth: number;
}
