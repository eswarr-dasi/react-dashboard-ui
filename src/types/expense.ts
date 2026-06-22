export interface Expense {
  id: number;
    amount: number;
      description: string;
        date: string;
          category: Category;
            createdAt: string;
            }

            export interface Category {
              id: number;
                name: string;
                  color: string;
                  }

                  export interface Budget {
                    id: number;
                      category: Category;
                        monthlyLimit: number;
                          spent: number;
                            remaining: number;
                              percentage: number;
                              }

                              export interface MonthlySummary {
                                year: number;
                                  month: number;
                                    totalSpent: number;
                                      categoryBreakdown: CategorySpend[];
                                        dailyTrend: DailySpend[];
                                        }

                                        export interface CategorySpend {
                                          category: Category;
                                            amount: number;
                                              percentage: number;
                                              }

                                              export interface DailySpend {
                                                date: string;
                                                  amount: number;
                                                  }

                                                  export interface PagedResponse<T> {
                                                    content: T[];
                                                      totalElements: number;
                                                        totalPages: number;
                                                          size: number;
                                                            number: number;
                                                            }
